import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken, getTokenFromHeader } from "@/lib/jwt";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ patientId: string }> }
) {
  try {
    const { patientId } = await params;

    const token = getTokenFromHeader(request.headers.get("authorization"));
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    // Get patient's vital records for analytics
    const vitalRecords = await prisma.vitalRecord.findMany({
      where: {
        session: {
          patientId: patientId
        }
      },
      include: {
        session: {
          include: {
            report: true
          }
        }
      },
      orderBy: { recordedAt: "asc" },
      take: 50
    });

    if (!vitalRecords.length) {
      return NextResponse.json(
        {
          success: true,
          data: {
            vitals: [],
            summary: {
              totalSessions: 0,
              averageBP: "—",
              averageHeartRate: 0,
              trend: "stable"
            },
            recommendations: []
          }
        },
        { status: 200 }
      );
    }

    // Calculate analytics
    const bpReadings = vitalRecords
      .filter(v => v.bloodPressureSys && v.bloodPressureDias)
      .map(v => ({ 
        systolic: v.bloodPressureSys!, 
        diastolic: v.bloodPressureDias! 
      }));

    const hrReadings = vitalRecords
      .filter(v => v.heartRate)
      .map(v => v.heartRate!);

    const avgSystolic = bpReadings.length > 0 
      ? Math.round(bpReadings.reduce((sum, bp) => sum + bp.systolic, 0) / bpReadings.length)
      : 0;
    
    const avgDiastolic = bpReadings.length > 0
      ? Math.round(bpReadings.reduce((sum, bp) => sum + bp.diastolic, 0) / bpReadings.length)
      : 0;

    const avgHR = hrReadings.length > 0
      ? Math.round(hrReadings.reduce((a, b) => a + b, 0) / hrReadings.length)
      : 0;

    // Count sessions
    const sessions = await prisma.monitoringSession.findMany({
      where: { patientId: patientId },
      include: { report: true }
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          vitals: vitalRecords.map(v => ({
            date: v.recordedAt.toISOString().split('T')[0],
            bloodPressure: v.bloodPressureSys && v.bloodPressureDias 
              ? `${v.bloodPressureSys}/${v.bloodPressureDias}`
              : '—',
            heartRate: v.heartRate || 0,
            temperature: v.temperature || 0,
            bloodSugar: v.bloodSugar || 0,
            notes: v.notes
          })),
          summary: {
            totalSessions: sessions.length,
            completedSessions: sessions.filter(s => s.status === 'COMPLETED').length,
            averageBP: `${avgSystolic}/${avgDiastolic}`,
            averageHeartRate: avgHR,
            trend: avgSystolic < 130 ? "improving" : avgSystolic > 140 ? "declining" : "stable"
          },
          reports: sessions
            .filter(s => s.report)
            .map(s => ({
              date: s.startTime.toISOString().split('T')[0],
              summary: s.report?.summary || "",
              recommendations: s.report?.recommendations || ""
            }))
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get analytics error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch analytics"
      },
      { status: 500 }
    );
  }
}

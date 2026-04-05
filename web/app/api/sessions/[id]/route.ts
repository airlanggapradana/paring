import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken, getTokenFromHeader } from "@/lib/jwt";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    const session = await prisma.monitoringSession.findUnique({
      where: { id: id },
      include: {
        booking: {
          include: {
            service: true,
            payment: true,
            patient: { include: { user: true } }
          }
        },
        patient: {
          include: { user: true }
        },
        nurse: {
          include: { user: true }
        },
        vitals: {
          orderBy: { recordedAt: "desc" }
        },
        report: true
      }
    });

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Session not found" },
        { status: 404 }
      );
    }

    // Verify user has access to this session
    const hasAccess = 
      (session.patient && session.patient.userId === payload.userId) ||
      (session.nurse && session.nurse.userId === payload.userId);

    if (!hasAccess && payload.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: session
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get session detail error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch session"
      },
      { status: 500 }
    );
  }
}

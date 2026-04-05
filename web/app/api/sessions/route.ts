import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken, getTokenFromHeader } from "@/lib/jwt";

export async function GET(request: NextRequest) {
  try {
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

    // Get current user's sessions
    const sessions = await prisma.monitoringSession.findMany({
      where: {
        OR: [
          { patient: { userId: payload.userId } },
          { nurse: { userId: payload.userId } }
        ]
      },
      include: {
        booking: {
          include: {
            service: true,
            payment: true
          }
        },
        patient: {
          include: { user: true }
        },
        nurse: {
          include: { user: true }
        },
        vitals: {
          orderBy: { recordedAt: "desc" },
          take: 10
        }
      },
      orderBy: { startTime: "desc" },
      take: 20
    });

    return NextResponse.json(
      {
        success: true,
        data: sessions
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get sessions error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch sessions"
      },
      { status: 500 }
    );
  }
}

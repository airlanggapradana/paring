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

    // Get consultations for current user
    const consultations = await prisma.consultation.findMany({
      where: {
        OR: [
          { userId: payload.userId },
          { recipientId: payload.userId }
        ]
      },
      include: {
        user: true,
        recipient: true,
        nurse: { include: { user: true } },
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1
        }
      },
      orderBy: { updatedAt: "desc" }
    });

    return NextResponse.json(
      {
        success: true,
        data: consultations
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get consultations error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch consultations"
      },
      { status: 500 }
    );
  }
}

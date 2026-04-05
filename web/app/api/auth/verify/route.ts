import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getTokenFromHeader } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const token = getTokenFromHeader(request.headers.get("authorization"));

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing authentication token",
          authenticated: false,
        },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
          authenticated: false,
        },
        { status: 401 }
      );
    }

    // Get updated user info
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        role: true,
        status: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
          authenticated: false,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Token is valid",
        authenticated: true,
        data: {
          user,
          token: payload,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Verification failed",
        authenticated: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

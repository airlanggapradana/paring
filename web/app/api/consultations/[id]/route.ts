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

    const consultation = await prisma.consultation.findUnique({
      where: { id: id },
      include: {
        user: true,
        recipient: true,
        nurse: { include: { user: true } },
        messages: {
          orderBy: { createdAt: "asc" }
        }
      }
    });

    if (!consultation) {
      return NextResponse.json(
        { success: false, message: "Consultation not found" },
        { status: 404 }
      );
    }

    // Verify user has access
    if (consultation.userId !== payload.userId && consultation.recipientId !== payload.userId && payload.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 }
      );
    }

    // Mark messages as read
    await prisma.message.updateMany({
      where: {
        consultationId: id,
        NOT: { senderId: payload.userId }
      },
      data: {
        isRead: true,
        readAt: new Date()
      }
    });

    return NextResponse.json(
      {
        success: true,
        data: consultation
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get consultation error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch consultation"
      },
      { status: 500 }
    );
  }
}

export async function POST(
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

    const body = await request.json();
    const { content } = body;

    if (!content?.trim()) {
      return NextResponse.json(
        { success: false, message: "Message content is required" },
        { status: 400 }
      );
    }

    // Verify consultation exists and user has access
    const consultation = await prisma.consultation.findUnique({
      where: { id: id }
    });

    if (!consultation) {
      return NextResponse.json(
        { success: false, message: "Consultation not found" },
        { status: 404 }
      );
    }

    if (consultation.userId !== payload.userId && consultation.recipientId !== payload.userId) {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 }
      );
    }

    // Create message
    const message = await prisma.message.create({
      data: {
        consultationId: id,
        senderId: payload.userId,
        content
      }
    });

    // Update consultation updatedAt
    await prisma.consultation.update({
      where: { id: id },
      data: { updatedAt: new Date() }
    });

    return NextResponse.json(
      {
        success: true,
        data: message
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Send message error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message"
      },
      { status: 500 }
    );
  }
}

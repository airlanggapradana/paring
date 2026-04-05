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

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Get user with profile to determine filter
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: {
        patientProfile: true,
        nurseProfile: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    let where: any = {};
    
    // Filter based on user role
    if (user.patientProfile) {
      where.patientId = user.patientProfile.id;
    } else if (user.nurseProfile) {
      where.nurseId = user.nurseProfile.id;
    }

    if (status) {
      where.status = status;
    }

    const total = await prisma.booking.count({ where });

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        patient: { include: { user: true } },
        nurse: { include: { user: true } },
        service: true,
        payment: true,
        sessions: true,
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          bookings,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get bookings error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    const body = await request.json();

    // Get patient profile
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: { patientProfile: true },
    });

    if (!user?.patientProfile) {
      return NextResponse.json(
        { success: false, message: "Only patients can create bookings" },
        { status: 403 }
      );
    }

    // Generate invoice number
    const invoiceNumber = `INV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const booking = await prisma.booking.create({
      data: {
        invoiceNumber,
        patientId: user.patientProfile.id,
        nurseId: body.nurseId,
        serviceId: body.serviceId,
        userId: payload.userId,
        requestedDate: new Date(body.requestedDate),
        requestedTime: body.requestedTime,
        duration: body.duration,
        notes: body.notes,
        basePrice: body.basePrice,
        totalPrice: body.totalPrice,
        status: "WAITING_PAYMENT",
      },
      include: {
        patient: { include: { user: true } },
        nurse: { include: { user: true } },
        service: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        data: booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create booking error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        patient: { include: { user: true } },
        nurse: { include: { user: true } },
        service: true,
        payment: true,
        sessions: {
          include: {
            vitals: true,
            activities: true,
            report: true,
          },
        },
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: booking,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get booking error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch booking",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const booking = await prisma.booking.update({
      where: { id },
      data: {
        status: body.status,
        paymentStatus: body.paymentStatus,
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
        data: booking,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update booking error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update booking",
      },
      { status: 500 }
    );
  }
}

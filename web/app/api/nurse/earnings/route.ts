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

    // Get nurse profile
    const nurse = await prisma.nurseProfile.findUnique({
      where: { userId: payload.userId }
    });

    if (!nurse) {
      return NextResponse.json(
        { success: false, message: "Nurse profile not found" },
        { status: 404 }
      );
    }

    // Get all bookings for this nurse with payments
    const bookings = await prisma.booking.findMany({
      where: { nurseId: nurse.id },
      include: {
        payment: true,
        patient: { include: { user: true } }
      },
      orderBy: { createdAt: "desc" }
    });

    // Calculate earnings
    let totalEarnings = 0;
    let pendingPayout = 0;
    let completedSessions = 0;

    bookings.forEach(booking => {
      const amount = booking.totalPrice || 0;
      totalEarnings += amount;

      if (booking.payment?.status !== 'PAID') {
        pendingPayout += amount;
      }

      if (booking.status === 'COMPLETED') {
        completedSessions++;
      }
    });

    // Group by month
    const earningsByMonth: Record<string, number> = {};
    bookings.forEach(booking => {
      const month = booking.createdAt.toISOString().split('T')[0].substring(0, 7);
      if (!earningsByMonth[month]) {
        earningsByMonth[month] = 0;
      }
      earningsByMonth[month] += booking.totalPrice || 0;
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          summary: {
            totalEarnings,
            pendingPayout,
            completedSessions,
            totalBookings: bookings.length
          },
          earningsByMonth,
          recentTransactions: bookings.slice(0, 20).map(b => ({
            id: b.id,
            date: b.createdAt.toISOString().split('T')[0],
            patient: b.patient.user.name,
            amount: b.totalPrice,
            status: b.payment?.status || b.status
          }))
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get earnings summary error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch earnings summary"
      },
      { status: 500 }
    );
  }
}

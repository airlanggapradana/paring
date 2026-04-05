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

    // Get current user's patient profile
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: {
        patientProfile: {
          include: {
            bookings: {
              include: {
                nurse: { include: { user: true } },
                service: true,
              },
              orderBy: { createdAt: "desc" },
            },
            sessions: {
              include: {
                nurse: { include: { user: true } },
              },
              orderBy: { createdAt: "desc" },
              take: 5,
            },
          },
        },
      },
    });

    if (!user?.patientProfile) {
      return NextResponse.json(
        { success: false, message: "Patient profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          ...user,
          password: undefined,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get patient profile error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch patient profile",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
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

    // Get and update patient profile
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      include: { patientProfile: true },
    });

    if (!user?.patientProfile) {
      return NextResponse.json(
        { success: false, message: "Patient profile not found" },
        { status: 404 }
      );
    }

    const updatedProfile = await prisma.patientProfile.update({
      where: { id: user.patientProfile.id },
      data: {
        fullName: body.fullName,
        age: body.age,
        gender: body.gender,
        weight: body.weight,
        height: body.height,
        address: body.address,
        bloodPressureNormal: body.bloodPressureNormal,
        hasDiabetes: body.hasDiabetes,
        isBedridden: body.isBedridden,
        drugAllergies: body.drugAllergies,
        emergencyName: body.emergencyName,
        emergencyPhone: body.emergencyPhone,
      },
      include: {
        user: true,
        bookings: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Patient profile updated",
        data: updatedProfile,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update patient profile error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update patient profile",
      },
      { status: 500 }
    );
  }
}

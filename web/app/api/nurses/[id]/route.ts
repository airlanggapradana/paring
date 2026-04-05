import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const nurse = await prisma.nurseProfile.findUnique({
      where: { id: params.id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            phone: true,
            createdAt: true,
          },
        },
        specializations: true,
        serviceTypes: true,
        documents: true,
        reviews: {
          include: {
            nurse: false,
          },
        },
        bookings: {
          include: {
            patient: {
              select: {
                fullName: true,
              },
            },
            service: true,
          },
          take: 5,
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!nurse) {
      return NextResponse.json(
        { success: false, message: "Nurse not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: nurse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get nurse error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch nurse",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();

    const nurse = await prisma.nurseProfile.update({
      where: { id: params.id },
      data: {
        yearsExperience: body.yearsExperience,
        biography: body.biography,
        availability: body.availability,
        serviceArea: body.serviceArea,
      },
      include: {
        user: true,
        specializations: true,
        serviceTypes: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: nurse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update nurse error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update nurse",
      },
      { status: 500 }
    );
  }
}

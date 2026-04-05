import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        success: true,
        data: services,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get services error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch services",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const service = await prisma.service.create({
      data: {
        name: body.name,
        type: body.type,
        description: body.description,
        basePrice: body.basePrice,
        maxDurationHours: body.maxDurationHours,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: service,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create service error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create service",
      },
      { status: 500 }
    );
  }
}

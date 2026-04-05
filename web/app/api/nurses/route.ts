import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken, getTokenFromHeader } from "@/lib/jwt";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceType = searchParams.get("serviceType");
    const serviceArea = searchParams.get("serviceArea");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Build filter
    const where: any = {};
    if (serviceArea) {
      where.serviceArea = { contains: serviceArea };
    }
    if (serviceType) {
      where.serviceTypes = {
        some: { serviceType },
      };
    }

    // Get total count
    const total = await prisma.nurseProfile.count({ where });

    // Get nurses with pagination
    const nurses = await prisma.nurseProfile.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            phone: true,
          },
        },
        specializations: true,
        serviceTypes: true,
        reviews: true,
      },
      orderBy: { rating: "desc" },
      skip,
      take: limit,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          nurses: nurses.map((nurse) => ({
            ...nurse,
            reviewsCount: nurse.reviews.length,
            reviews: undefined,
          })),
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
    console.error("Get nurses error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch nurses",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

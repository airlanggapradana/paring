import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, validateEmail, validatePassword } from "@/lib/auth-utils";
import { generateToken } from "@/lib/jwt";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  role: z.enum(["PATIENT", "NURSE"]),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.error.issues.map((e) => ({
            field: e.path[0],
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    const { email, password, name, phone, role } = validation.data;

    // Validate password strength
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Password does not meet requirements",
          errors: passwordValidation.errors.map((e) => ({
            field: "password",
            message: e,
          })),
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: existingUser.email === email ? "Email already exists" : "Phone already exists",
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone,
        role: role as any,
        status: "ACTIVE",
      },
    });

    // Create profile based on role
    if (role === "PATIENT") {
      await prisma.patientProfile.create({
        data: {
          userId: user.id,
          fullName: name,
          age: 0,
          gender: "MALE" as any,
          address: "",
          emergencyName: "",
          emergencyPhone: "",
        },
      });
    } else if (role === "NURSE") {
      await prisma.nurseProfile.create({
        data: {
          userId: user.id,
          yearsExperience: 0,
          biography: "",
          availability: "",
          serviceArea: "",
        },
      });
    }

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role as any,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          },
          token,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

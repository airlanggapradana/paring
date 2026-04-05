import { NextRequest, NextResponse } from "next/server";
import { verifyToken, getTokenFromHeader } from "./jwt";

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    email: string;
    role: "ADMIN" | "NURSE" | "PATIENT";
  };
}

export async function withAuth(request: NextRequest) {
  const token = getTokenFromHeader(request.headers.get("authorization"));

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Missing authentication token" },
      { status: 401 }
    );
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json(
      { success: false, message: "Invalid or expired token" },
      { status: 401 }
    );
  }

  // Attach user to request
  (request as any).user = payload;
  return null; // Continue to handler
}

export async function withRole(request: NextRequest, allowedRoles: string[]) {
  const authResponse = await withAuth(request);
  if (authResponse) return authResponse;

  const user = (request as any).user;
  if (!allowedRoles.includes(user.role)) {
    return NextResponse.json(
      { success: false, message: "Insufficient permissions" },
      { status: 403 }
    );
  }

  return null; // Continue to handler
}

export function getAuthUser(request: NextRequest) {
  return (request as any).user;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// User Types
export interface UserDTO {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: "PATIENT" | "NURSE" | "ADMIN";
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "PENDING_VERIFICATION";
  createdAt: string;
}

export interface AuthResponse {
  user: UserDTO;
  token: string;
  expiresIn: number;
}

// Nurse Types
export interface NurseDTO {
  id: string;
  user: UserDTO;
  yearsExperience: number;
  biography: string;
  specializations: string[];
  serviceTypes: string[];
  availability: string;
  serviceArea: string;
  rating: number;
  totalReviews: number;
  completedSessions: number;
  pricing: {
    visitCare: number;
    liveOutCare: number;
    liveInCare: number;
  };
}

// Booking Types
export interface BookingDTO {
  id: string;
  invoiceNumber: string;
  patient: any;
  nurse: any;
  service: any;
  requestedDate: string;
  status: "WAITING_PAYMENT" | "CONFIRMED" | "ACTIVE" | "COMPLETED" | "CANCELLED";
  paymentStatus: "UNPAID" | "PENDING" | "PAID" | "FAILED" | "REFUNDED";
  totalPrice: number;
  createdAt: string;
}

// Error Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface ApiError extends Error {
  statusCode: number;
  errors?: ValidationError[];
}

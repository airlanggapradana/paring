const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
  token?: string;
}

export async function apiCall(endpoint: string, options: RequestOptions = {}) {
  const url = `${API_BASE}${endpoint}`;
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  } else if (typeof window !== "undefined") {
    const token = localStorage.getItem("paring_auth_token");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const config: RequestInit = {
    method: options.method || "GET",
    headers,
  };

  if (options.body && options.method !== "GET") {
    config.body = JSON.stringify(options.body);
  }

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw {
      status: response.status,
      message: data.message,
      data,
    };
  }

  return data;
}

// Auth API calls
export const authAPI = {
  register: (email: string, password: string, name: string, phone: string, role: string) =>
    apiCall("/auth/register", {
      method: "POST",
      body: { email, password, name, phone, role },
    }),

  login: (email: string, password: string) =>
    apiCall("/auth/login", {
      method: "POST",
      body: { email, password },
    }),

  logout: () =>
    apiCall("/auth/logout", { method: "POST" }),

  verify: (token: string) =>
    apiCall("/auth/verify", { token }),

  getProfile: (token?: string) =>
    apiCall("/auth/me", { token }),
};

// Nurses API calls
export const nursesAPI = {
  getList: (filters?: { serviceType?: string; serviceArea?: string; page?: number; limit?: number }) => {
    const params = new URLSearchParams();
    if (filters?.serviceType) params.append("serviceType", filters.serviceType);
    if (filters?.serviceArea) params.append("serviceArea", filters.serviceArea);
    if (filters?.page) params.append("page", filters.page.toString());
    if (filters?.limit) params.append("limit", filters.limit.toString());

    return apiCall(`/nurses?${params.toString()}`);
  },

  getDetail: (id: string) =>
    apiCall(`/nurses/${id}`),

  update: (id: string, data: any) =>
    apiCall(`/nurses/${id}`, {
      method: "PUT",
      body: data,
    }),
};

// Services API calls
export const servicesAPI = {
  getList: () =>
    apiCall("/services"),

  create: (data: any) =>
    apiCall("/services", {
      method: "POST",
      body: data,
    }),
};

// Bookings API calls
export const bookingsAPI = {
  getList: (filters?: { status?: string; page?: number; limit?: number }) => {
    const params = new URLSearchParams();
    if (filters?.status) params.append("status", filters.status);
    if (filters?.page) params.append("page", filters.page.toString());
    if (filters?.limit) params.append("limit", filters.limit.toString());

    return apiCall(`/bookings?${params.toString()}`);
  },

  getDetail: (id: string) =>
    apiCall(`/bookings/${id}`),

  create: (data: any) =>
    apiCall("/bookings", {
      method: "POST",
      body: data,
    }),

  update: (id: string, data: any) =>
    apiCall(`/bookings/${id}`, {
      method: "PATCH",
      body: data,
    }),
};

// Patients API calls
export const patientsAPI = {
  getProfile: () =>
    apiCall("/patients"),

  updateProfile: (data: any) =>
    apiCall("/patients", {
      method: "PUT",
      body: data,
    }),
};

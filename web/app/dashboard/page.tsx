"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { patientsAPI, nursesAPI, bookingsAPI } from "@/lib/api-client";

interface DashboardData {
  user: any;
  bookings: any[];
  upcomingBooking: any;
  nurses: any[];
  stats: {
    totalBookings: number;
    completedBookings: number;
    upcomingBookings: number;
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("paring_auth_token");
    if (!token) {
      router.push("/login");
      return;
    }

    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      // Get patient/nurse profile
      const profileResponse = await patientsAPI.getProfile();
      const user = profileResponse.data;

      // Get bookings
      const bookingsResponse = await bookingsAPI.getList();
      const bookings = bookingsResponse.data.bookings || [];

      // Get available nurses
      const nursesResponse = await nursesAPI.getList({ limit: 5 });
      const nurses = nursesResponse.data.nurses || [];

      // Calculate stats
      const stats = {
        totalBookings: bookings.length,
        completedBookings: bookings.filter((b: any) => b.status === "COMPLETED").length,
        upcomingBookings: bookings.filter((b: any) => b.status === "CONFIRMED").length,
      };

      setData({
        user,
        bookings,
        upcomingBooking: bookings.find((b: any) => b.status === "CONFIRMED"),
        nurses,
        stats,
      });
    } catch (err: any) {
      setError(err.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("paring_auth_token");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">PARING Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome, {data?.user?.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Total Bookings</p>
            <p className="text-3xl font-bold text-gray-900">{data?.stats.totalBookings}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Upcoming</p>
            <p className="text-3xl font-bold text-blue-600">{data?.stats.upcomingBookings}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">Completed</p>
            <p className="text-3xl font-bold text-green-600">{data?.stats.completedBookings}</p>
          </div>
        </div>

        {/* Upcoming Booking */}
        {data?.upcomingBooking && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Next Scheduled Booking</h2>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900">
                {data.upcomingBooking.service?.name}
              </p>
              <p className="text-gray-600">
                {new Date(data.upcomingBooking.requestedDate).toLocaleDateString()} at{" "}
                {data.upcomingBooking.requestedTime}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                With: {data.upcomingBooking.nurse?.user?.name}
              </p>
            </div>
          </div>
        )}

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h2>
          {data?.bookings && data.bookings.length > 0 ? (
            <div className="space-y-4">
              {data.bookings.slice(0, 5).map((booking) => (
                <div key={booking.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{booking.service?.name}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(booking.requestedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === "COMPLETED"
                      ? "bg-green-100 text-green-800"
                      : booking.status === "CONFIRMED"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No bookings yet</p>
          )}
        </div>

        {/* Available Nurses */}
        {data?.user?.role === "PATIENT" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Available Nurses</h2>
            {data?.nurses && data.nurses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.nurses.map((nurse) => (
                  <div key={nurse.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                    <p className="font-semibold text-gray-900">{nurse.user?.name}</p>
                    <p className="text-sm text-gray-600">{nurse.yearsExperience} years experience</p>
                    <p className="text-sm text-gray-600 mt-2">Area: {nurse.serviceArea}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-yellow-500">⭐ {nurse.rating.toFixed(1)}</span>
                      <span className="text-gray-600 text-sm">({nurse.totalReviews} reviews)</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No nurses available</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

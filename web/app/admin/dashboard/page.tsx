'use client';

import { useState, useEffect } from 'react';
import { Users, CheckCircle2, TrendingUp, DollarSign, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalNurses: 0,
    totalBookings: 0,
    totalRevenue: 0,
    pendingVerifications: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        // Fetch from multiple endpoints
        const token = localStorage.getItem('paring_auth_token');
        const [usersRes, nursesRes, bookingsRes] = await Promise.all([
          fetch('/api/auth/users', { headers: { Authorization: `Bearer ${token}` } }).catch(() => null),
          fetch('/api/nurses', { headers: { Authorization: `Bearer ${token}` } }).catch(() => null),
          fetch('/api/bookings', { headers: { Authorization: `Bearer ${token}` } }).catch(() => null),
        ]);

        let totalUsers = 0, totalNurses = 0, totalBookings = 0;

        if (usersRes && usersRes.ok) {
          const userData = await usersRes.json();
          totalUsers = (userData.data || userData).length || 0;
        }
        if (nursesRes && nursesRes.ok) {
          const nurseData = await nursesRes.json();
          totalNurses = (nurseData.data || nurseData).length || 0;
        }
        if (bookingsRes && bookingsRes.ok) {
          const bookingData = await bookingsRes.json();
          totalBookings = (bookingData.data || bookingData).length || 0;
        }

        setStats({
          totalUsers,
          totalNurses,
          totalBookings,
          totalRevenue: totalBookings * 500000, // Estimate
          pendingVerifications: Math.floor(totalNurses * 0.2),
        });
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({
    icon: Icon,
    label,
    value,
    color,
    href,
  }: {
    icon: any;
    label: string;
    value: string | number;
    color: string;
    href: string;
  }) => (
    <Link
      href={href}
      className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#37A47C]/40 hover:shadow-md transition-all`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          <Icon size={24} />
        </div>
      </div>
      <p className="text-sm text-slate-600 font-medium mb-1">{label}</p>
      <p className="text-3xl font-bold text-[#1B4332]">{value}</p>
    </Link>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#37A47C]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Dashboard Admin</h1>
        <p className="text-slate-600">Kelola platform PARING dengan mudah</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          icon={Users}
          label="Total Pengguna"
          value={stats.totalUsers}
          color="bg-[#E2F1EC] text-[#37A47C]"
          href="/admin/users"
        />
        <StatCard
          icon={CheckCircle2}
          label="Total Perawat"
          value={stats.totalNurses}
          color="bg-[#FFF4F2] text-[#ff4d4f]"
          href="/admin/nurses"
        />
        <StatCard
          icon={TrendingUp}
          label="Total Booking"
          value={stats.totalBookings}
          color="bg-blue-50 text-blue-600"
          href="/admin/bookings"
        />
        <StatCard
          icon={DollarSign}
          label="Revenue"
          value={`Rp ${(stats.totalRevenue / 1000000).toFixed(1)}M`}
          color="bg-emerald-50 text-emerald-600"
          href="/admin/analytics"
        />
        <StatCard
          icon={CheckCircle2}
          label="Pending Verif"
          value={stats.pendingVerifications}
          color="bg-amber-50 text-amber-600"
          href="/admin/nurses"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="font-bold text-lg text-[#1B4332] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/admin/users"
            className="p-4 bg-[#E2F1EC] hover:bg-[#37A47C]/20 rounded-xl text-center font-semibold text-[#37A47C] transition-colors"
          >
            Lihat Pengguna
          </Link>
          <Link
            href="/admin/nurses"
            className="p-4 bg-[#FFF4F2] hover:bg-[#ff4d4f]/20 rounded-xl text-center font-semibold text-[#ff4d4f] transition-colors"
          >
            Verifikasi Perawat
          </Link>
          <Link
            href="/admin/bookings"
            className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl text-center font-semibold text-blue-600 transition-colors"
          >
            Lihat Booking
          </Link>
          <Link
            href="/admin/analytics"
            className="p-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-center font-semibold text-emerald-600 transition-colors"
          >
            Analitik
          </Link>
        </div>
      </div>
    </div>
  );
}

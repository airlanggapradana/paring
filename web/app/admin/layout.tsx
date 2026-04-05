'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { Menu, X, LogOut, LayoutDashboard, Users, CheckCircle2, BarChart3, Inbox } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, logout, isLoading } = useAuthContext();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FBF9F6]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#37A47C]"></div>
      </div>
    );
  }

  // Protect admin route
  if (user?.role !== 'ADMIN') {
    router.push('/login');
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/users', label: 'Pengguna', icon: Users },
    { href: '/admin/nurses', label: 'Verifikasi Perawat', icon: CheckCircle2 },
    { href: '/admin/bookings', label: 'Booking', icon: Inbox },
    { href: '/admin/analytics', label: 'Analitik', icon: BarChart3 },
  ];

  return (
    <div className="flex h-screen bg-[#FBF9F6]">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-slate-200 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-100">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#37A47C] rounded-xl flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
            {sidebarOpen && <span className="font-serif font-bold text-[#1B4332]">PARING</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#E2F1EC] text-slate-600 hover:text-[#37A47C] transition-colors"
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          {sidebarOpen && (
            <div className="px-3 py-2">
              <p className="text-xs font-bold text-slate-500">Admin</p>
              <p className="text-sm font-semibold text-[#1B4332] truncate">{user?.name}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
          >
            <LogOut size={18} />
            {sidebarOpen && 'Logout'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-right">
            <p className="text-sm text-slate-500">Logged in as</p>
            <p className="font-bold text-[#1B4332]">{user?.email}</p>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

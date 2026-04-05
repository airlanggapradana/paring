'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, UserPlus, HeartPulse, FileText, Activity, AlertCircle, ArrowRight, Clock, LogOut, PhoneCall } from 'lucide-react';
import { patientsAPI, nursesAPI, bookingsAPI } from '@/lib/api-client';

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
  const [error, setError] = useState('');
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('paring_auth_token');
    if (!token) {
      router.push('/login');
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
        completedBookings: bookings.filter((b: any) => b.status === 'COMPLETED').length,
        upcomingBookings: bookings.filter((b: any) => b.status === 'CONFIRMED').length,
      };

      setData({
        user,
        bookings,
        upcomingBooking: bookings.find((b: any) => b.status === 'CONFIRMED'),
        nurses,
        stats,
      });
    } catch (err: any) {
      setError(err.message || 'Gagal memuat dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('paring_auth_token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FBF9F6]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#37A47C] mx-auto mb-4"></div>
          <p className="text-slate-600 font-light">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F6] font-sans">
      {/* Emergency Modal Overlay */}
      <AnimatePresence>
        {showEmergencyModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEmergencyModal(false)}
              className="absolute inset-0 bg-red-950/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 w-full max-w-sm relative z-10 overflow-hidden text-center shadow-2xl shadow-red-500/20"
            >
              {/* Pulsing Rings Animation */}
              <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-red-500 rounded-full"
                />
                <motion.div 
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className="absolute inset-0 bg-red-400 rounded-full"
                />
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
                  <PhoneCall size={32} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-red-600 mb-2">Panggilan Darurat</h2>
              <p className="text-slate-500 font-light mb-8 leading-relaxed">
                Menghubungi Tim Medis Paring & Ambulan Terdekat...
              </p>

              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 active:scale-95 transition-transform flex items-center justify-center gap-2">
                  <Activity size={20} />
                  Kirim Lokasi GPS
                </button>
                <button 
                  onClick={() => setShowEmergencyModal(false)}
                  className="w-full bg-slate-100 text-slate-500 font-bold py-4 rounded-2xl active:scale-95 transition-transform"
                >
                  Batal
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-red-400 uppercase tracking-widest">
                <AlertCircle size={14} />
                Hanya untuk situasi kritis
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
        {/* Top Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#1B4332]">
              Halo, {data?.user?.name?.split(' ')[0]} 👋
            </h1>
            <p className="text-sm text-slate-500 font-light mt-1">Keluarga PARING</p>
          </div>
          <div className="flex gap-3">
            <button className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center relative text-slate-600 hover:bg-slate-50 transition-colors">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button 
              onClick={handleLogout}
              className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl mb-6 text-sm font-light">
            {error}
          </div>
        )}

        {/* Quick Actions (Mobile First Grid) */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Link href="/dashboard" className="bg-[#1B4332] text-white p-5 rounded-[2rem] shadow-lg shadow-[#1B4332]/20 flex flex-col justify-between h-40 group relative overflow-hidden hover:shadow-xl transition-all">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#37A47C] rounded-full blur-2xl opacity-60"></div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm self-start relative z-10">
              <HeartPulse size={24} />
            </div>
            <div className="relative z-10">
              <p className="font-bold text-lg leading-tight mb-1">Cari<br />Perawat</p>
            </div>
          </Link>

          <div className="grid grid-rows-2 gap-4">
            <Link href="/dashboard" className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-[#37A47C]/30 transition-colors">
              <div className="w-10 h-10 bg-[#E2F1EC] text-[#37A47C] rounded-xl flex items-center justify-center shrink-0">
                <UserPlus size={20} />
              </div>
              <span className="font-bold text-sm text-[#1B4332] leading-tight">Tambah<br />Pasien</span>
            </Link>
            <Link href="/dashboard" className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-[#37A47C]/30 transition-colors">
              <div className="w-10 h-10 bg-[#FFF4F2] text-[#ff4d4f] rounded-xl flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <span className="font-bold text-sm text-[#1B4332] leading-tight">Riwayat<br />Layanan</span>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 text-center">
            <p className="text-slate-600 text-xs font-light">Total</p>
            <p className="text-2xl font-bold text-[#1B4332]">{data?.stats.totalBookings || 0}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 text-center">
            <p className="text-slate-600 text-xs font-light">Mendatang</p>
            <p className="text-2xl font-bold text-[#37A47C]">{data?.stats.upcomingBookings || 0}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 text-center">
            <p className="text-slate-600 text-xs font-light">Selesai</p>
            <p className="text-2xl font-bold text-green-600">{data?.stats.completedBookings || 0}</p>
          </div>
        </div>

        {/* Active Session Status */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-bold text-lg text-slate-800">Sesi Aktif Hari Ini</h2>
          </div>

          {data?.upcomingBooking ? (
            /* Upcoming Booking Card */
            <div className="bg-[#37A47C] rounded-[2rem] p-1 shadow-lg shadow-[#37A47C]/20 relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl opacity-50"></div>

              <div className="block p-5 bg-[#37A47C] rounded-[1.8rem] relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 bg-emerald-700/50 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                      {data.upcomingBooking.service?.name || 'Booking'}
                    </span>
                  </div>
                  <span className="text-emerald-100 text-xs font-bold flex items-center gap-1">
                    <Clock size={12} /> {data.upcomingBooking.requestedTime || 'N/A'}
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl overflow-hidden shrink-0 relative flex items-center justify-center text-white font-serif font-bold text-xl">
                    {data.upcomingBooking.nurse?.user?.name?.charAt(0) || 'N'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-white mb-0.5">
                      {data.upcomingBooking.nurse?.user?.name || 'Perawat'}
                    </h3>
                    <p className="text-sm text-emerald-100 font-medium tracking-wide">
                      {new Date(data.upcomingBooking.requestedDate).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Empty State No Active Session */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center py-10 opacity-60">
                <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-4">
                  <Activity size={32} />
                </div>
                <h3 className="font-bold text-slate-700 mb-2">Tidak ada sesi aktif</h3>
                <p className="text-sm text-slate-500 font-light max-w-[200px]">Cari perawat terbaik untuk kebutuhan medis lansia Anda.</p>
                <Link
                  href="/dashboard"
                  className="mt-4 text-[#37A47C] font-bold text-sm bg-[#E2F1EC] px-4 py-2 rounded-xl hover:bg-[#37A47C] hover:text-white transition-colors"
                >
                  Cari Perawat
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Recent Bookings */}
        {data && data.bookings.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold text-lg text-slate-800 mb-4">Riwayat Booking</h2>
            <div className="space-y-3">
              {data.bookings.slice(0, 3).map((booking) => (
                <div key={booking.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E2F1EC] text-[#37A47C] rounded-xl flex items-center justify-center">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1B4332]">{booking.service?.name}</p>
                      <p className="text-xs text-slate-500">
                        {new Date(booking.requestedDate).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                    booking.status === 'CONFIRMED' ? 'bg-blue-100 text-blue-700' :
                    booking.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Emergency Button Prominent Action */}
        <div className="bg-[#ff4d4f]/10 border border-[#ff4d4f]/20 rounded-[2rem] p-6 flex items-center gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4d4f] rounded-full blur-3xl opacity-10"></div>
          <button 
            onClick={() => setShowEmergencyModal(true)}
            className="w-16 h-16 bg-[#ff4d4f] text-white rounded-[1.5rem] shadow-lg shadow-red-500/30 flex items-center justify-center shrink-0 animate-pulse hover:animate-none hover:scale-105 transition-transform active:scale-95"
          >
            <AlertCircle size={32} />
          </button>
          <div>
            <h3 className="font-bold text-red-600 mb-1 text-lg">Tombol Darurat</h3>
            <p className="text-xs text-red-500/80 font-medium">Tekan hanya saat krisis. Notifikasi 24/7 ke admin & ambulan.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

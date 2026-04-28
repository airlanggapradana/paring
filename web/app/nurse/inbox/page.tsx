'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAppointments } from '@/lib/hooks/useApi';
import { Calendar, ChevronRight, AlertCircle } from 'lucide-react';
import { Loader } from '@/components/Loader';

export default function NurseInbox() {
  const [activeTab, setActiveTab] = useState('baru');
  const { data: appointmentsData, isLoading } = useAppointments();

  const appointments = appointmentsData?.data || [];

  // Filter by status
  const newBookings = appointments.filter((apt: any) => 
    apt.status === 'PENDING' || apt.status === 'CONFIRMED'
  );
  
  const completedBookings = appointments.filter((apt: any) => 
    apt.status === 'COMPLETED'
  );

  const currentBookings = activeTab === 'baru' ? newBookings : completedBookings;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6]">
      <header className="mb-8">
        <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Inbox Booking</h1>
        <p className="text-sm text-slate-500 font-light mt-1">Kelola permintaan layanan dari pasien.</p>
      </header>

      {/* Tabs */}
      <div className="flex mb-6 bg-white rounded-full p-1 border border-slate-100 shadow-sm relative z-10">
        {['baru', 'selesai'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-bold rounded-full transition-all capitalize
              ${activeTab === tab 
                ? 'bg-[#1B4332] text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-800'}`}
          >
            {tab === 'baru' ? `Permintaan Baru (${newBookings.length})` : `Riwayat (${completedBookings.length})`}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 space-y-4">
        {currentBookings.length > 0 ? (
          currentBookings.map((apt: any) => (
            <Link key={apt.id} href={`/nurse/appointments/${apt.id}`} className="block bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 hover:border-[#37A47C]/40 hover:shadow-md transition-all group">
              <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${apt.status === 'COMPLETED' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {apt.status === 'COMPLETED' ? 'Selesai' : 'Menunggu Konfirmasi'}
                  </span>
                </div>
                <span className="text-slate-400 text-xs font-bold">{formatDate(apt.appointmentDate)}</span>
              </div>

              <div className="flex gap-4 items-center mb-4">
                <div className="w-14 h-14 bg-[#1B4332] rounded-2xl overflow-hidden shrink-0 relative flex items-center justify-center text-white font-serif font-bold text-xl">
                  {apt.patientName?.charAt(0) || 'P'}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#1B4332] text-sm mb-1">{apt.patientName || 'Pasien'}</h4>
                  <p className="text-xs text-slate-500 mb-1.5">
                    {apt.serviceType === 'VISIT' ? 'Visit Care (Max 3 Jam)' : apt.serviceType === 'LIVE_OUT' ? 'Live-Out Care (8 Jam)' : 'Live-In Care (24 Jam)'}
                  </p>
                  <div className="flex items-center text-xs text-slate-400 gap-1">
                    <Calendar size={12} />
                    {formatTime(apt.appointmentDate)} WIB
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                <span className="text-sm font-bold text-[#1B4332]">Rp {apt.totalPrice?.toLocaleString('id-ID') || '0'}</span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#37A47C] group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center justify-center text-center py-16 mt-4">
            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
              <AlertCircle size={40} />
            </div>
            <h3 className="font-bold text-[#1B4332] text-lg mb-2">
              {activeTab === 'baru' ? 'Tidak ada permintaan baru' : 'Belum ada riwayat'}
            </h3>
            <p className="text-sm text-slate-500 font-light max-w-[240px]">
              {activeTab === 'baru' 
                ? 'Tunggu pasien untuk memesan layanan Anda.' 
                : 'Riwayat layanan akan muncul di sini.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

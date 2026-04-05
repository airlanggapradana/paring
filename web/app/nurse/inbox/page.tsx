'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Calendar, ChevronRight, CheckCircle2, AlertCircle, Clock, Loader2 } from 'lucide-react';
import { bookingsAPI } from '@/lib/api-client';

export default function NurseInbox() {
  const [activeTab, setActiveTab] = useState('baru');
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await bookingsAPI.getList();
        setBookings(data.data || data);
      } catch (err: any) {
        console.error('Failed to fetch bookings:', err);
        setError(err.message || 'Failed to load bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Organize bookings by status
  const organizeBookings = () => {
    const grouped: { [key: string]: any[] } = {
      baru: [],
      selesai: []
    };

    bookings.forEach(b => {
      const status = b.status?.toLowerCase();
      if (status === 'completed' || status === 'selesai') {
        grouped.selesai.push(b);
      } else {
        grouped.baru.push(b);
      }
    });

    return grouped;
  };

  if (error) {
    return (
      <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6] items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-sm">
          <p className="text-red-700 font-semibold mb-4">Error Loading Bookings</p>
          <p className="text-red-600 text-sm mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Retry</button>
        </div>
      </div>
    );
  }

  const organizedBookings = organizeBookings();
  const currentBookings = organizedBookings[activeTab as keyof typeof organizedBookings] || [];

  return (
    <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6]">
      <header className="mb-8">
        <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Inbox Booking</h1>
        <p className="text-sm text-slate-500 font-light mt-1">Kelola permintaan layanan dari pasien.</p>
      </header>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#37A47C]" />
        </div>
      )}

      {!loading && (
        <>
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
            {tab === 'baru' ? 'Permintaan Baru' : 'Riwayat'}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 space-y-4">
        {currentBookings.length > 0 ? (
          currentBookings.map((b) => (
            <Link key={b.id} href={`/nurse/appointments/${b.id}`} className="block bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 hover:border-[#37A47C]/40 hover:shadow-md transition-all group">
              <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${b.paymentStatus === 'PAID' || b.paymentStatus === 'paid' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {b.paymentStatus === 'PAID' || b.paymentStatus === 'paid' ? 'Pembayaran Berhasil' : 'Menunggu Bayar'}
                  </span>
                </div>
                <div className={`px-3 py-1 font-bold text-[10px] rounded-full border ${(b.status === 'COMPLETED' || b.status?.toLowerCase() === 'completed') ? 'bg-slate-100 text-slate-600' : 'bg-[#E2F1EC] text-[#37A47C]'} flex items-center gap-1`}>
                  {(b.status === 'COMPLETED' || b.status?.toLowerCase() === 'completed') && <CheckCircle2 size={10} />}
                  {b.status?.toUpperCase() || 'PENDING'}
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1B4332] text-white flex items-center justify-center shrink-0 font-serif font-bold text-xl">
                  {b.patient?.charAt(0) || 'P'}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1B4332] text-lg leading-tight mb-1">{b.patient}</h3>
                  <p className="text-sm font-medium text-[#37A47C] mb-2">{b.service}</p>
                  
                  <div className="flex items-center text-xs text-slate-500 gap-3 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-slate-400" />
                      {b.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-slate-400" />
                      {b.time}
                    </div>
                  </div>
                </div>
                <div className="self-center">
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-[#37A47C] transition-colors" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center justify-center text-center py-16 mt-4">
             <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
               <Filter size={40} />
             </div>
             <h3 className="font-bold text-[#1B4332] text-lg mb-2">Belum ada booking</h3>
             <p className="text-sm text-slate-500 font-light max-w-[240px]">
               Data booking akan muncul di sini setelah pasien memilih Anda.
             </p>
          </div>
        )}
      </div>
        </>
      )}
    </div>
  );
}

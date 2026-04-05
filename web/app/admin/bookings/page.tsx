'use client';

import { useState, useEffect } from 'react';
import { Loader2, Calendar, DollarSign, CheckCircle2, Clock } from 'lucide-react';

interface Booking {
  id: string;
  patient: string;
  nurse: string;
  service: string;
  date: string;
  status: string;
  amount?: number;
}

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('paring_auth_token');
        const res = await fetch('/api/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const bookingsList = Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : [];
        setBookings(
          bookingsList.map((b: any) => ({
            id: b.id,
            patient: b.patient || b.patientName || 'Unknown',
            nurse: b.nurse || b.nurseName || 'Unassigned',
            service: b.service || 'General',
            date: b.date || new Date().toLocaleDateString(),
            status: b.status || 'PENDING',
            amount: b.amount || 500000,
          }))
        );
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
        // Demo data
        setBookings([
          { id: '1', patient: 'Ibu Kartini', nurse: 'Ners Rina', service: 'Visit Care', date: '12 Ags 2026', status: 'CONFIRMED', amount: 500000 },
          { id: '2', patient: 'Bapak Bardi', nurse: 'Ners Siti', service: 'Live-Out Care', date: '15 Ags 2026', status: 'PENDING', amount: 750000 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const filtered = bookings.filter((b) => {
    if (filter === 'all') return true;
    return b.status.toUpperCase().includes(filter.toUpperCase());
  });

  const getStatusBadge = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'confirmed' || s === 'terkonfirmasi')
      return 'bg-green-100 text-green-700';
    if (s === 'completed' || s === 'selesai') return 'bg-slate-100 text-slate-700';
    return 'bg-amber-100 text-amber-700';
  };

  const getStatusLabel = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'confirmed') return 'Terkonfirmasi';
    if (s === 'completed') return 'Selesai';
    return 'Menunggu';
  };

  const totalRevenue = bookings
    .filter((b) => b.status.toLowerCase() === 'completed')
    .reduce((sum, b) => sum + (b.amount || 0), 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#37A47C]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Manajemen Booking</h1>
        <p className="text-slate-600">Total booking: {bookings.length} | Revenue: Rp {(totalRevenue / 1000000).toFixed(1)}M</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3">
        {(['all', 'pending', 'confirmed', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              filter === f
                ? 'bg-[#37A47C] text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f === 'all' ? 'Semua' : f === 'pending' ? 'Menunggu' : f === 'confirmed' ? 'Terkonfirmasi' : 'Selesai'}
          </button>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Pasien</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Perawat</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Layanan</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Tanggal</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Biaya</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#1B4332]">{booking.patient}</td>
                  <td className="px-6 py-4 text-slate-600">{booking.nurse}</td>
                  <td className="px-6 py-4 text-slate-600">{booking.service}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      {booking.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-semibold text-[#1B4332]">
                      <DollarSign size={16} />
                      Rp {(booking.amount || 0).toLocaleString('id-ID')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(booking.status)}`}>
                      {getStatusLabel(booking.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">Tidak ada booking ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}

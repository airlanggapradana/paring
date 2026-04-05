'use client';

import { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, X, Star, MapPin } from 'lucide-react';

interface Nurse {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  isVerified: boolean;
  experience?: string;
  sessions?: number;
  createdAt?: string;
}

export default function AdminNurses() {
  const [nurses, setNurses] = useState<Nurse[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending'>('all');

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('paring_auth_token');
        const res = await fetch('/api/nurses', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const nursesList = Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : [];
        setNurses(
          nursesList.map((n: any) => ({
            id: n.id,
            name: n.name,
            specialty: n.specialty || 'General',
            rating: n.rating || 0,
            location: n.location || 'N/A',
            isVerified: n.status === 'VERIFIED' || n.isVerified,
            sessions: n.sessions || 0,
          }))
        );
      } catch (err) {
        console.error('Failed to fetch nurses:', err);
        // Demo data
        setNurses([
          {
            id: '1',
            name: 'Ners Rina Suryani',
            specialty: 'Spesialis Penyakit Dalam',
            rating: 4.9,
            location: 'Solo',
            isVerified: true,
            sessions: 124,
          },
          {
            id: '2',
            name: 'Ners Budiawan',
            specialty: 'Perawatan Geriatri',
            rating: 4.8,
            location: 'Jakarta Selatan',
            isVerified: false,
            sessions: 95,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNurses();
  }, []);

  const filtered = nurses.filter((n) => {
    if (filter === 'verified') return n.isVerified;
    if (filter === 'pending') return !n.isVerified;
    return true;
  });

  const handleVerify = (id: string) => {
    setNurses(nurses.map((n) => (n.id === id ? { ...n, isVerified: true } : n)));
  };

  const handleReject = (id: string) => {
    setNurses(nurses.filter((n) => n.id !== id));
  };

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
        <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Verifikasi Perawat</h1>
        <p className="text-slate-600">Kelola dan verifikasi data perawat</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3">
        {(['all', 'verified', 'pending'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              filter === f
                ? 'bg-[#37A47C] text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f === 'all' ? 'Semua' : f === 'verified' ? 'Terverifikasi' : 'Menunggu'}
          </button>
        ))}
      </div>

      {/* Nurses Grid */}
      <div className="grid gap-4">
        {filtered.map((nurse) => (
          <div key={nurse.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-[#1B4332]">{nurse.name}</h3>
                <p className="text-sm text-[#37A47C] font-semibold">{nurse.specialty}</p>
              </div>
              {nurse.isVerified ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  Terverifikasi
                </span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                  Menunggu
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[#1B4332]">{nurse.rating.toFixed(1)}</span>
                  <Star size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Lokasi</p>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <MapPin size={14} />
                  {nurse.location}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Sesi</p>
                <p className="font-bold text-[#1B4332]">{nurse.sessions}</p>
              </div>
            </div>

            {!nurse.isVerified && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleVerify(nurse.id)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={18} />
                  Verifikasi
                </button>
                <button
                  onClick={() => handleReject(nurse.id)}
                  className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <X size={18} />
                  Tolak
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500">Tidak ada perawat ditemukan</p>
        </div>
      )}
    </div>
  );
}

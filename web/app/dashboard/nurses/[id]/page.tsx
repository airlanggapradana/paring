'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Star, MapPin, Award, CheckCircle2, MessageCircle, CalendarClock, Loader2, AlertCircle } from 'lucide-react';
import { nursesAPI } from '@/lib/api-client';

export default function NurseProfilePage() {
  const params = useParams();
  const nurseId = params.id as string;
  const [nurseData, setNurseData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNurseData = async () => {
      try {
        setIsLoading(true);
        const response = await nursesAPI.getDetail(nurseId);
        setNurseData(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load nurse data');
      } finally {
        setIsLoading(false);
      }
    };

    if (nurseId) {
      fetchNurseData();
    }
  }, [nurseId]);

  if (isLoading) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="animate-spin text-[#37A47C]" />
          <p className="text-slate-600">Memuat data perawat...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 text-center max-w-md shadow-lg border border-red-200">
          <div className="flex justify-center mb-4">
            <AlertCircle size={40} className="text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-[#1B4332] mb-2">Error</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <Link href="/dashboard/nurses">
            <Button className="w-full bg-[#37A47C] hover:bg-[#1B4332]">
              Kembali ke Daftar Perawat
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const name = nurseData?.user?.name || 'Perawat';
  const rating = nurseData?.rating || 4.9;
  const experience = nurseData?.yearsExperience || 5;
  const sessionsCompleted = nurseData?.sessionsCompleted || 0;
  const location = nurseData?.serviceArea || 'Lokasi Tidak Diketahui';
  const bio = nurseData?.bio || 'Perawat profesional berpengalaman dalam perawatan lansia.';

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-48">
      {/* Photo Header */}
      <div className="relative h-72 bg-slate-200">
        <div className="absolute inset-0 bg-slate-300"></div> {/* Placeholder for image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/40 to-transparent"></div>

        <Link href="/dashboard/nurses" className="absolute top-6 left-6 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10 hover:bg-black/40 transition-colors">
          <ArrowLeft size={20} />
        </Link>

         <div className="absolute bottom-6 left-6 right-6 z-10">
           <div className="flex justify-between items-end">
             <div>
               <h1 className="font-serif text-3xl font-bold text-white leading-tight mb-1">{name}</h1>
               <div className="flex items-center text-emerald-100 text-sm gap-4">
                 <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
                 <span className="flex items-center gap-1 text-[#F59E0B] font-bold">
                   <Star size={14} fill="currentColor" /> {rating} ({nurseData?.reviewCount || 0} Ulasan)
                 </span>
               </div>
             </div>
             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0">
               <Award size={24} className="text-emerald-100" />
             </div>
           </div>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-4 relative z-20 space-y-4">

         {/* Key Stats */}
         <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex justify-between divide-x divide-slate-100">
           <div className="flex-1 text-center">
             <div className="font-bold text-xl text-[#1B4332]">{experience}+</div>
             <div className="text-xs text-slate-500 mt-1">Tahun Pengalaman</div>
           </div>
           <div className="flex-1 text-center">
             <div className="font-bold text-xl text-[#1B4332]">{sessionsCompleted}</div>
             <div className="text-xs text-slate-500 mt-1">Sesi Selesai</div>
           </div>
           <div className="flex-1 text-center">
             <div className="font-bold text-xl text-[#37A47C]">{nurseData?.strStatus || 'STR'}</div>
             <div className="text-xs text-slate-500 mt-1">Aktif & Valid</div>
           </div>
         </div>

         {/* About */}
         <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
           <h3 className="font-bold text-lg text-[#1B4332] mb-3">Tentang {name}</h3>
           <p className="text-slate-600 font-light leading-relaxed text-sm">
             {bio}
           </p>

           <div className="mt-4 pt-4 border-t border-slate-100">
             <h4 className="font-bold text-sm text-slate-800 mb-3">Sertifikasi & Keahlian</h4>
             <div className="flex flex-wrap gap-2">
               {nurseData?.certifications?.map((cert: string, i: number) => (
                 <span key={i} className="text-xs bg-[#E2F1EC] text-[#37A47C] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                   <CheckCircle2 size={12} /> {cert}
                 </span>
               )) || (
                 <>
                   <span className="text-xs bg-[#E2F1EC] text-[#37A47C] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                     <CheckCircle2 size={12} /> STR
                   </span>
                   <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-3 py-1.5 rounded-lg">
                     Gerontologi
                   </span>
                 </>
               )}
             </div>
           </div>
         </div>

        {/* Services & Prices */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-[#1B4332]">Layanan & Tarif</h3>
          </div>
          <div className="space-y-3">
            <div className="p-4 border border-[#37A47C]/30 bg-[#FBF9F6] rounded-2xl flex justify-between items-center group cursor-pointer hover:border-[#37A47C] transition-colors">
              <div>
                <div className="font-bold text-[#1B4332] mb-0.5">Visit Care</div>
                <div className="text-xs text-slate-500">Maksimal 3 Jam</div>
              </div>
              <div className="font-bold text-[#37A47C]">Rp 150.000</div>
            </div>

            <div className="p-4 border border-slate-100 rounded-2xl flex justify-between items-center group cursor-pointer hover:border-slate-300 transition-colors">
              <div>
                <div className="font-bold text-slate-700 mb-0.5">Live-Out Care</div>
                <div className="text-xs text-slate-400">Shift 8 Jam (Siang)</div>
              </div>
              <div className="font-bold text-slate-800">Rp 250.000</div>
            </div>
          </div>
        </div>

        {/* Schedule Preview */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <div className="flex gap-3 mb-2">
            <CalendarClock size={20} className="text-[#37A47C]" />
            <h3 className="font-bold text-lg text-[#1B4332]">Ketersediaan Terdekat</h3>
          </div>
          <p className="text-xs text-slate-500 font-light mb-4">Minggu ini, Ners Rina bisa menerima pesanan.</p>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar [&::-webkit-scrollbar]:hidden">
            {[
              { day: 'Sen', date: '12', status: 'available' },
              { day: 'Sel', date: '13', status: 'full' },
              { day: 'Rab', date: '14', status: 'available' },
              { day: 'Kam', date: '15', status: 'available' },
              { day: 'Jum', date: '16', status: 'full' },
            ].map((d, i) => (
              <div key={i} className={`shrink-0 w-14 py-3 rounded-2xl border flex flex-col items-center justify-center ${d.status === 'available' ? 'border-[#37A47C] bg-[#E2F1EC] text-[#1B4332]' : 'border-slate-100 bg-slate-50 text-slate-400 opacity-60'}`}>
                <span className="text-[10px] font-bold uppercase">{d.day}</span>
                <span className="text-lg font-serif font-bold">{d.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Bar (Stacked above bottom nav) */}
      <div className="fixed bottom-[84px] inset-x-0 bg-white/80 backdrop-blur-xl border-t border-slate-100 p-4 z-40">
        <div className="max-w-3xl mx-auto flex gap-4">
          <Button
            onClick={() => window.location.href = '/dashboard/consultation/1'}
            variant="outline"
            className="h-14  shrink-0 justify-center rounded-2xl border-slate-100 bg-[#E2F1EC] text-[#37A47C] hover:bg-[#37A47C] hover:text-white transition-all shadow-sm flex items-center"
          >
            <MessageCircle size={24} />
          </Button>
          <Button
            onClick={() => window.location.href = '/dashboard/bookings/new'}
            className="h-14 flex-1 justify-center rounded-2xl bg-[#37A47C] hover:bg-[#1B4332] shadow-lg shadow-[#37A47C]/20 text-lg"
          >
            Buat Booking
          </Button>
        </div>
      </div>
    </div>
  );
}

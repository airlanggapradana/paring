'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Clock, User, Phone, MessageCircle, AlertCircle, CheckCircle2, ChevronRight, FileText, Navigation, Heart, Move, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { bookingsAPI } from '@/lib/api-client';

export default function NurseAppointmentDetail() {
  const params = useParams();
  const id = params.id as string;
  const [appointment, setAppointment] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        setIsLoading(true);
        const response = await bookingsAPI.getDetail(id);
        setAppointment(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load appointment data');
        // Fallback to default data if API fails
        setAppointment({
          id: id,
          patient: 'Pasien',
          age: 0,
          condition: 'Kondisi Medis',
          date: '—',
          time: '—',
          address: '—',
          paymentStatus: 'PENDING',
          service: 'Visit Care',
          status: 'PENDING',
          requirements: [],
          note: 'Tidak ada catatan',
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchAppointment();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="animate-spin text-[#37A47C]" />
          <p className="text-slate-600">Memuat detail kunjungan...</p>
        </div>
      </div>
    );
  }

  const patientName = appointment?.patient?.fullName || appointment?.patient || 'Pasien';
  const patientAge = appointment?.patient?.age || appointment?.age || 0;
  const patientCondition = appointment?.patient?.medicalHistory?.condition || appointment?.condition || 'Kondisi Medis';
  const appointmentDate = appointment?.scheduledDate ? new Date(appointment.scheduledDate).toLocaleDateString('id-ID') : appointment?.date || '—';
  const appointmentTime = appointment?.scheduledTime || appointment?.time || '—';
  const appointmentAddress = appointment?.patient?.address || appointment?.address || '—';
  const paymentStatus = appointment?.paymentStatus || 'PENDING';
  const service = appointment?.service?.name || appointment?.service || 'Visit Care';
  const requirements = appointment?.requirements || [];
  const note = appointment?.note || 'Tidak ada catatan';

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-32">
      {/* Header */}
       <header className="px-6 py-6 bg-white border-b border-slate-100 flex items-center gap-4 sticky top-0 z-50">
         <Link href="/nurse/dashboard" className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-500 transition-colors">
           <ArrowLeft size={20} />
         </Link>
         <div>
           <h1 className="font-serif text-xl font-bold text-[#1B4332]">Detail Kunjungan</h1>
           <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">#BK-{id?.substring(0, 8).toUpperCase()}</p>
         </div>
       </header>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        
         {/* Payment Warning if UNPAID */}
         {paymentStatus !== 'PAID' && paymentStatus !== 'paid' && (
           <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3 text-amber-700">
             <AlertCircle size={20} className="shrink-0" />
             <div>
               <p className="text-sm font-bold">Pasien Belum Membayar</p>
               <p className="text-xs font-medium">Anda tidak dapat memulai sesi sebelum pembayaran dikonfirmasi.</p>
             </div>
           </div>
         )}

         {/* Patient Info */}
         <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
           <h3 className="font-bold text-sm text-[#37A47C] uppercase tracking-wider mb-4">Profil Pasien</h3>
           <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1B4332] rounded-2xl flex items-center justify-center text-white font-serif font-bold text-2xl">
                {patientName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-[#1B4332] text-lg mb-0.5">{patientName}</h4>
                <p className="text-xs text-slate-500 font-semibold">{patientAge} Tahun • {patientCondition}</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="w-10 h-10 bg-[#E2F1EC] text-[#37A47C] rounded-xl flex items-center justify-center hover:bg-[#37A47C] hover:text-white transition-colors">
                  <Phone size={18} />
                </button>
                <button className="w-10 h-10 bg-[#E2F1EC] text-[#37A47C] rounded-xl flex items-center justify-center hover:bg-[#37A47C] hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </button>
              </div>
           </div>

           <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
             <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tanggal</p>
                <p className="text-sm font-bold text-slate-800">{appointmentDate}</p>
             </div>
             <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Waktu Kedatangan</p>
                <p className="text-sm font-bold text-slate-800">{appointmentTime}</p>
             </div>
             <div className="col-span-2">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Alamat Pasien</p>
                <p className="text-sm font-bold text-slate-800">{appointmentAddress}</p>
                <button className="mt-3 text-xs font-bold text-[#37A47C] flex items-center gap-1 bg-[#E2F1EC] px-3 py-2 rounded-lg w-max">
                  <Navigation size={14} /> Buka di Maps
                </button>
             </div>
           </div>
         </div>

         {/* Service Requirements */}
         <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
           <h3 className="font-bold text-sm text-[#37A47C] uppercase tracking-wider mb-4">Kebutuhan {service === 'Non-medis' ? 'Pendampingan' : 'Medis'}</h3>
           <div className="flex flex-wrap gap-2">
             {requirements.length > 0 ? (
               requirements.map((req: string) => (
                 <span key={req} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-600">{req}</span>
               ))
             ) : (
               <p className="text-xs text-slate-500">Tidak ada kebutuhan khusus</p>
             )}
           </div>
           <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
             <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Catatan Tambahan</p>
             <p className="text-xs text-slate-600 leading-relaxed font-light italic">"{note}"</p>
           </div>
         </div>

      </div>

       {/* Floating Action Bar */}
       <div className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 p-4 safe-area-pb z-50">
         <div className="max-w-3xl mx-auto flex gap-4">
           <Button 
             onClick={() => window.location.href=`/nurse/session/${id}/${service === 'Non-medis' ? 'non-medical' : 'checklist'}`}
             disabled={paymentStatus !== 'PAID' && paymentStatus !== 'paid'}
             className="h-14 flex-1 justify-center rounded-2xl bg-[#37A47C] hover:bg-[#1B4332] shadow-lg shadow-[#37A47C]/20 text-lg disabled:opacity-50 disabled:grayscale"
           >
             Mulai Sesi {service === 'Non-medis' ? 'Pendampingan' : 'Perawatan'}
           </Button>
         </div>
       </div>
    </div>
  );
}

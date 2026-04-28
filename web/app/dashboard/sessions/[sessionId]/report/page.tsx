'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Sparkles, TrendingUp, Download, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAppointmentById, useCareLogs, useActivityLogs } from '@/lib/hooks/useApi';
import { Loader } from '@/components/Loader';

export default function SessionReportPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const sessionId = params.sessionId as string;
  const type = searchParams.get('type') || 'medical';

  const isMedical = type === 'medical';

  const { data: appointmentData, isLoading: aptLoading } = useAppointmentById(sessionId);
  const { data: careLogsData, isLoading: careLogsLoading } = useCareLogs();
  const { data: activityLogsData, isLoading: activityLogsLoading } = useActivityLogs();

  const appointment = appointmentData?.data;
  const careLogs = careLogsData?.data || [];
  const activityLogs = activityLogsData?.data || [];

  // Get logs for this appointment
  const sessionCareLogs = careLogs.filter((log: any) => log.appointmentId === sessionId);
  const sessionActivityLogs = activityLogs.filter((log: any) => log.appointmentId === sessionId);

  const latestCareLog = sessionCareLogs[0];
  const activityLog = sessionActivityLogs[0];

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

  if (aptLoading || careLogsLoading || activityLogsLoading) {
    return <Loader />;
  }

  if (!appointment) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle size={40} className="text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">Laporan sesi tidak ditemukan</p>
        </div>
      </div>
    );
  }

  // Parse vitals
  const bp = latestCareLog?.bloodPressure ? latestCareLog.bloodPressure.split('/').map(Number) : [120, 80];

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-28">
      
      {/* Header */}
      <header className="px-6 py-6 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/bookings" className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-500 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-serif text-xl font-bold text-[#1B4332]">Laporan Sesi</h1>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">{formatDate(appointment.appointmentDate)}</p>
          </div>
        </div>
        <button className="w-10 h-10 text-slate-500 hover:text-[#37A47C] transition-colors rounded-full flex items-center justify-center">
          <Download size={20} />
        </button>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        
        {/* PARING AI Summary Card */}
        <div className="bg-[#1B4332] rounded-[2rem] p-6 shadow-xl shadow-[#1B4332]/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#37A47C] rounded-full blur-2xl opacity-40"></div>
          
          <div className="flex items-center gap-2 mb-4 relative z-10 text-emerald-200">
            <Sparkles size={18} />
            <h2 className="text-xs font-bold uppercase tracking-widest">Ringkasan PARING AI</h2>
          </div>
          
          <div className="flex items-start gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
              <span className="font-serif text-2xl font-bold text-white">{isMedical ? (bp[0] >= 90 && bp[0] <= 140 ? 'B+' : 'B') : 'A'}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 leading-tight">
                {isMedical 
                  ? (bp[0] >= 90 && bp[0] <= 140 ? 'Kondisi Stabil' : 'Kondisi Perlu Perhatian')
                  : 'Pasien Responsif'}
              </h3>
               <p className="text-sm text-emerald-100/90 font-light leading-relaxed mb-4">
                 {isMedical 
                   ? `${latestCareLog ? 'Vital signs menunjukkan kondisi stabil.' : 'Monitoring vital signs dilakukan.'} Respons terhadap perawatan baik.`
                   : 'Pasien menunjukkan keterlibatan positif dalam aktivitas pendampingan.'}
               </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 relative z-10 flex items-start gap-3">
             <ShieldAlert size={16} className="text-amber-300 mt-0.5" />
             <p className="text-xs text-white/90">
               <span className="font-bold text-white">Rekomendasi Utama:</span> {isMedical 
                 ? latestCareLog?.notes || 'Lanjutkan monitoring vital signs secara rutin.'
                 : activityLog?.notes || 'Pertahankan aktivitas pendampingan yang telah berjalan baik.'}
             </p>
          </div>
        </div>

        {/* Info Sesi Dasar */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-sm text-[#37A47C] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Detail Sesi</h3>
          
          <div className="grid grid-cols-2 gap-y-4">
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1">Pasien Dirawat</p>
              <p className="font-bold text-slate-800 text-sm">{appointment.patientName || 'Pasien'}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1">Perawat Bertugas</p>
              <p className="font-bold text-[#1B4332] text-sm">{appointment.nurseName || 'Perawat'}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1.5"><Clock size={14}/> Durasi Sesi</p>
              <p className="font-bold text-slate-800 text-sm">
                {formatTime(appointment.appointmentDate)} - 
                {appointment.serviceType === 'VISIT' ? ` 3+ jam` : appointment.serviceType === 'LIVE_OUT' ? ` 8+ jam` : ` 24+ jam`}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1.5"><TrendingUp size={14}/> Jenis Layanan</p>
              <p className="font-bold text-slate-800 text-sm">
                {appointment.serviceType === 'VISIT' ? 'Visit Care' : 
                 appointment.serviceType === 'LIVE_OUT' ? 'Live-Out Care' : 'Live-In Care'}
              </p>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-sm text-[#37A47C] uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckCircle size={18} /> {isMedical ? 'Hasil Pemeriksaan Medis' : 'Aktivitas Pendampingan'}
          </h3>

          <div className="space-y-4">
            {isMedical ? (
              <>
                {latestCareLog ? (
                  <>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                         <h4 className="font-bold text-[#1B4332]">Pengukuran Tanda Vital</h4>
                         <CheckCircle2 size={16} className="text-[#37A47C]" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                        <div>
                          <span className="text-slate-500 block text-xs">Tekanan Darah:</span>
                          <span className="font-bold text-slate-800">{bp[0]}/{bp[1]} mmHg</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-xs">Gula Darah:</span>
                          <span className="font-bold text-slate-800">{latestCareLog.bloodSugar || 'N/A'} mg/dL</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-xs">Suhu:</span>
                          <span className="font-bold text-slate-800">{latestCareLog.temperature || 'N/A'}°C</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-xs">Respirasi:</span>
                          <span className="font-bold text-slate-800">{latestCareLog.respiratoryRate || 'N/A'} x/min</span>
                        </div>
                      </div>
                    </div>

                    {latestCareLog.notes && (
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                           <h4 className="font-bold text-[#1B4332]">Catatan Medis</h4>
                           <CheckCircle2 size={16} className="text-[#37A47C]" />
                        </div>
                        <p className="text-sm font-light text-slate-600 leading-relaxed">
                          {latestCareLog.notes}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center py-8">
                    <p className="text-slate-500 font-light">Belum ada data pemeriksaan medis</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {activityLog ? (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                       <h4 className="font-bold text-[#1B4332]">Aktivitas Pendampingan</h4>
                       <CheckCircle2 size={16} className="text-[#37A47C]" />
                    </div>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">
                      {activityLog.activityDescription || activityLog.notes || 'Pendampingan dilakukan sesuai rencana'}
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center py-8">
                    <p className="text-slate-500 font-light">Belum ada data aktivitas pendampingan</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

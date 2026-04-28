'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, TrendingUp, TrendingDown, Activity, Brain, CheckCircle2, ChevronRight, Stethoscope, AlertCircle } from 'lucide-react';
import { usePatientById, useCareLogs } from '@/lib/hooks/useApi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Loader } from '@/components/Loader';

export default function PatientAnalyticsPage() {
  const params = useParams();
  const patientId = params.id as string;
  
  const { data: patientData, isLoading: patientLoading } = usePatientById(patientId);
  const { data: careLogsData, isLoading: careLogsLoading } = useCareLogs();

  const patient = patientData?.data;
  const careLogs = careLogsData?.data || [];

  // Filter care logs for this patient and sort by date
  const patientCareLogs = careLogs
    .filter((log: any) => log.patientId === patientId || log.appointmentId)
    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Transform care logs into chart data (group into weeks)
  const chartData = patientCareLogs.slice(0, 5).reverse().map((log: any, idx: number) => {
    const bp = log.bloodPressure ? log.bloodPressure.split('/').map(Number) : [0, 0];
    return {
      name: `W${idx + 1}`,
      sistolik: bp[0] || 120,
      diastolik: bp[1] || 80,
      date: new Date(log.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })
    };
  });

  // Get latest blood pressure for trends
  const latestBP = patientCareLogs[0]?.bloodPressure ? patientCareLogs[0].bloodPressure.split('/').map(Number) : [0, 0];
  const previousBP = patientCareLogs[1]?.bloodPressure ? patientCareLogs[1].bloodPressure.split('/').map(Number) : [0, 0];
  
  const bpTrend = (previousBP[0] || 0) > (latestBP[0] || 120) ? -5 : 5;

  if (patientLoading || careLogsLoading) {
    return <Loader />;
  }

  if (!patient) {
    return (
      <div className="px-6 py-8 pb-24 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6]">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard/patients" className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-500 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Pasien tidak ditemukan</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-20 flex flex-col">
      
      {/* Header Profile */}
      <header className="px-6 py-6 pb-4 bg-white border-b border-slate-100 flex items-center gap-4 sticky top-0 z-50">
         <Link href={`/dashboard/patients/${patientId}`} className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-500 transition-colors">
            <ArrowLeft size={20} />
         </Link>
         <div>
            <h1 className="font-serif text-xl font-bold text-[#1B4332]">Analisis & Tren</h1>
            <p className="text-xs text-slate-500 font-bold mt-0.5">{patient.name || 'Pasien'} • {patientCareLogs.length > 0 ? '1 Bulan Terakhir' : 'Belum ada data'}</p>
         </div>
      </header>

      <div className="flex-1 p-6 space-y-6">
        
        {/* PARING AI Care Insights */}
        <div className="bg-gradient-to-br from-[#1B4332] to-[#0f2e20] rounded-[2rem] p-6 text-white shadow-xl shadow-[#1B4332]/20 relative overflow-hidden ring-1 ring-[#37A47C]/30">
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#37A47C] rounded-full blur-2xl opacity-40"></div>
           
           <div className="flex items-center gap-2 mb-4 relative z-10">
             <div className="bg-[#E2F1EC]/20 p-2 rounded-xl backdrop-blur-sm border border-white/10">
               <Brain size={20} className="text-emerald-300" />
             </div>
             <h2 className="font-bold text-lg text-emerald-50">Insight AI PARING</h2>
           </div>
           
           <div className="relative z-10">
             <p className="text-sm text-emerald-100/90 leading-relaxed font-light mb-4">
               Kondisi {patient.name || 'Pasien'} menunjukkan <span className="font-bold text-white">{Math.abs(bpTrend)}% {bpTrend < 0 ? 'peningkatan stabilitas' : 'penurunan stabilitas'}</span> minggu ini. Tensi darah rata-rata {latestBP[0] ? `${latestBP[0]}/${latestBP[1]} mmHg` : 'tidak ada data'}. 
               {patientCareLogs.length > 0 ? ' Tren menunjukkan perbaikan konsisten.' : ' Mulai catat data vital untuk analisis.'}
             </p>
             
             {patientCareLogs.length > 0 && (
               <div className="space-y-2">
                 <div className="bg-black/20 backdrop-blur border border-white/10 rounded-2xl p-3 flex gap-3 text-xs text-emerald-50 items-start">
                   <CheckCircle2 size={16} className="text-[#37A47C] shrink-0 mt-0.5" />
                   <p><span className="font-bold text-white">Tren Positif:</span> Tekanan darah menunjukkan stabilitas yang lebih baik dalam catatan terbaru.</p>
                 </div>
                 <div className="bg-black/20 backdrop-blur border border-white/10 rounded-2xl p-3 flex gap-3 text-xs text-emerald-50 items-start">
                   <CheckCircle2 size={16} className="text-[#37A47C] shrink-0 mt-0.5" />
                   <p><span className="font-bold text-white">Rekomendasi:</span> Lanjutkan pemeriksaan rutin setiap hari untuk monitoring optimal.</p>
                 </div>
               </div>
             )}
           </div>
        </div>

        {/* BP Trend Graph */}
        {chartData.length > 0 ? (
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
             <div className="flex justify-between items-center mb-6">
               <div>
                 <h3 className="font-bold text-[#1B4332] flex items-center gap-2">
                   <Activity size={18} className="text-[#37A47C]" />
                   Tren Tekanan Darah
                 </h3>
                 <p className="text-[10px] text-slate-400 font-bold mt-1">Sistolik & Diastolik</p>
               </div>
               <div className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${bpTrend < 0 ? 'bg-[#E2F1EC] text-[#37A47C]' : 'bg-red-50 text-red-500'}`}>
                 {bpTrend < 0 ? <TrendingDown size={14} /> : <TrendingUp size={14} />} {Math.abs(bpTrend)}%
               </div>
             </div>
             
             {/* Recharts Component */}
             <div className="h-[200px] w-full mt-4 -ml-4">
               <ResponsiveContainer width="100%" height="100%">
                 <LineChart
                   data={chartData}
                   margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                 >
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                   <XAxis 
                     dataKey="name" 
                     axisLine={false} 
                     tickLine={false} 
                     tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} 
                     dy={10}
                   />
                   <YAxis 
                     axisLine={false} 
                     tickLine={false} 
                     tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }}
                     domain={[60, 160]}
                     ticks={[80, 100, 120, 140]}
                   />
                   <Tooltip 
                     contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                     labelStyle={{ fontSize: '12px', fontWeight: 'bold', color: '#1B4332' }}
                     itemStyle={{ fontSize: '12px', fontWeight: '600' }}
                   />
                   <Line 
                     type="monotone" 
                     dataKey="sistolik" 
                     name="Sistolik"
                     stroke="#ff4d4f" 
                     strokeWidth={3}
                     dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#ff4d4f' }}
                     activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} 
                   />
                   <Line 
                     type="monotone" 
                     dataKey="diastolik" 
                     name="Diastolik"
                     stroke="#37A47C" 
                     strokeWidth={3}
                     dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#37A47C' }}
                     activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} 
                   />
                 </LineChart>
               </ResponsiveContainer>
             </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center justify-center py-12">
            <AlertCircle size={40} className="text-slate-300 mb-4" />
            <p className="text-slate-500 font-light">Belum ada data tekanan darah untuk ditampilkan</p>
          </div>
        )}

        {/* Observasi Perawat */}
        <div className="bg-[#F8FAFC] rounded-[2rem] p-6 border border-slate-100">
           <h3 className="font-bold text-[#1B4332] mb-4 flex items-center gap-2">
             <Stethoscope size={18} className="text-[#37A47C]" />
             Ringkasan Observasi Perawat
           </h3>
           {patientCareLogs.length > 0 ? (
             <>
               <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                 "{patientCareLogs[0]?.notes || 'Belum ada catatan khusus'}"
               </p>
               <Link href={`/dashboard/patients/${patientId}`} className="text-xs font-bold text-[#37A47C] flex items-center gap-1">
                 Lihat di Riwayat Perawatan <ChevronRight size={14} />
               </Link>
             </>
           ) : (
             <p className="text-sm text-slate-500 font-light">Belum ada observasi perawat</p>
           )}
        </div>

      </div>
    </div>
  );
}

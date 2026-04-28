'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Activity, Edit3, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { usePatientById, useAppointments } from '@/lib/hooks/useApi';
import { Loader } from '@/components/Loader';
import { toast } from 'sonner';

export default function PatientProfileDetail() {
  const params = useParams();
  const patientId = params.id as string;
  
  const { data: patient, isLoading: patientLoading, error: patientError } = usePatientById(patientId);
  const { data: appointments, isLoading: appointmentsLoading } = useAppointments();

  if (patientLoading) {
    return <Loader />;
  }

  if (patientError) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 text-center max-w-sm shadow-sm border border-slate-100">
          <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
          <h2 className="font-bold text-[#1B4332] mb-2">Gagal Memuat Data</h2>
          <p className="text-slate-500 text-sm mb-4">Maaf, kami tidak dapat memuat data pasien ini.</p>
          <Link href="/dashboard/patients" className="text-[#37A47C] font-bold text-sm hover:underline">
            Kembali ke Daftar Pasien
          </Link>
        </div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 text-center max-w-sm shadow-sm border border-slate-100">
          <AlertCircle size={48} className="mx-auto mb-4 text-amber-500" />
          <h2 className="font-bold text-[#1B4332] mb-2">Pasien Tidak Ditemukan</h2>
          <p className="text-slate-500 text-sm mb-4">Data pasien ini tidak ada dalam sistem.</p>
          <Link href="/dashboard/patients" className="text-[#37A47C] font-bold text-sm hover:underline">
            Kembali ke Daftar Pasien
          </Link>
        </div>
      </div>
    );
  }

  const patientAppointments = appointments?.data?.filter((apt: any) => apt.patientId === patientId) || [];
  
  // Calculate age
  const birthDate = new Date(patient.data?.dateOfBirth || '');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const initials = patient.data?.name?.charAt(0).toUpperCase() || 'P';
  const medicalHistory = Array.isArray(patient.data?.medicalHistory) ? patient.data.medicalHistory.join(', ') : 'Tidak ada riwayat medis';

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-20">
      
      {/* Header Profile */}
      <div className="bg-[#1B4332] pt-6 pb-20 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#37A47C] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#37A47C] rounded-full blur-2xl opacity-30"></div>
        
        <div className="relative z-10 flex items-center justify-between mb-8">
          <Link href="/dashboard/patients" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <Link href={`/dashboard/patients/${patientId}/edit`} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Edit3 size={18} />
          </Link>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center text-white mb-4 shadow-lg backdrop-blur-sm overflow-hidden relative">
             <span className="font-serif text-4xl font-bold p-6">{initials}</span>
             <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white mb-1">{patient.data?.name || 'Pasien'}</h1>
          <p className="text-emerald-100 font-medium mb-4">{age} Tahun • {medicalHistory.split(',')[0]}</p>
          
          <div className="flex gap-4">
             <div className="bg-[#0f2e20] bg-opacity-40 backdrop-blur border border-white/10 rounded-2xl p-3 flex flex-col items-center w-20">
               <span className="text-white font-bold text-lg">{patient.data?.weight || '-'}</span>
               <span className="text-emerald-200 text-[10px] uppercase font-bold tracking-widest">Kg</span>
             </div>
             <div className="bg-[#0f2e20] bg-opacity-40 backdrop-blur border border-white/10 rounded-2xl p-3 flex flex-col items-center w-20">
               <span className="text-white font-bold text-lg">{patient.data?.height || '-'}</span>
               <span className="text-emerald-200 text-[10px] uppercase font-bold tracking-widest">cm</span>
             </div>
             <div className="bg-[#0f2e20] bg-opacity-40 backdrop-blur border border-white/10 rounded-2xl p-3 flex flex-col items-center w-20">
               <span className="text-white font-bold text-lg">{patient.data?.bloodType || '-'}</span>
               <span className="text-emerald-200 text-[10px] uppercase font-bold tracking-widest">Darah</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-8 relative z-20 space-y-6">
        
        {/* Quick Link to Analytics */}
        <Link href={`/dashboard/patients/${patientId}/analytics`} className="bg-[#E2F1EC] text-[#1B4332] rounded-2xl p-4 flex items-center justify-between shadow-sm border border-[#37A47C]/30 hover:bg-[#37A47C] hover:text-white transition-colors group">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-white/50 rounded-lg group-hover:bg-white/20">
               <Activity size={20} />
             </div>
             <div>
               <h3 className="font-bold text-sm">Lihat Analisis & Tren</h3>
               <p className="text-[10px] font-medium opacity-80">Grafik Vitals & Insight AI bulanan</p>
             </div>
          </div>
          <ChevronRight size={20} className="text-[#37A47C] group-hover:text-white" />
        </Link>

        {/* Medical History */}
        {medicalHistory && medicalHistory !== 'Tidak ada riwayat medis' && (
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <h2 className="font-bold text-[#1B4332] text-lg mb-4">Riwayat Medis</h2>
            <div className="flex flex-wrap gap-2">
              {medicalHistory.split(',').map((history: string, i: number) => (
                <span key={i} className="bg-[#E2F1EC] text-[#1B4332] px-3 py-1.5 rounded-full text-xs font-bold">
                  {history.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Patient Info */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h2 className="font-bold text-[#1B4332] text-lg mb-4">Informasi Pasien</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Email</p>
              <p className="text-sm font-bold text-[#1B4332] mt-1">{patient.data?.email || '-'}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">No. Telepon</p>
              <p className="text-sm font-bold text-[#1B4332] mt-1">{patient.data?.phone || '-'}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Tanggal Lahir</p>
              <p className="text-sm font-bold text-[#1B4332] mt-1">
                {new Date(patient.data?.dateOfBirth || '').toLocaleDateString('id-ID')}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Alamat</p>
              <p className="text-sm font-bold text-[#1B4332] mt-1">{patient.data?.address || '-'}</p>
            </div>
          </div>
        </div>

        {/* History Summary (Riwayat Perawatan) */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-[#1B4332] text-lg flex items-center gap-2">
              <Activity size={20} className="text-[#37A47C]" />
              Riwayat Kunjungan ({patientAppointments.length})
            </h2>
          </div>
          
          {patientAppointments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-500 text-sm">Belum ada riwayat kunjungan</p>
            </div>
          ) : (
            <div className="space-y-4 border-l-2 border-slate-100 pl-5 ml-2 relative">
              {patientAppointments.map((appointment: any, index: number) => (
                <div key={appointment.id} className="relative">
                  <div className={`absolute -left-[29px] top-1.5 w-4 h-4 rounded-full ${
                    appointment.status === 'COMPLETED' 
                      ? 'bg-white border-4 border-[#37A47C]' 
                      : 'bg-slate-200 border-4 border-white'
                  }`}></div>
                  <p className="text-xs font-bold text-slate-400 mb-1">
                    {new Date(appointment.appointmentDate).toLocaleDateString('id-ID')}
                  </p>
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100">
                    <h4 className="font-bold text-[#1B4332] text-sm mb-1">
                      {appointment.serviceType === 'VISIT' ? 'Visit Care' : 'Live-out Care'} ({appointment.status === 'COMPLETED' ? 'Selesai' : 'Berlangsung'})
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      Bersama {appointment.nurse?.name || 'Perawat'}
                    </p>
                    
                    {appointment.status === 'COMPLETED' && (
                      <Link href={`/dashboard/sessions/${appointment.id}/report`} className="text-xs font-bold text-[#37A47C] flex items-center gap-1 hover:text-[#1B4332] transition-colors w-max">
                        Lihat Report Analisis <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { usePatients } from '@/lib/hooks/useApi';
import { User, Plus, ChevronRight, AlertCircle } from 'lucide-react';
import { Loader } from '@/components/Loader';

export default function PatientsList() {
  const { data: patientsData, isLoading, error } = usePatients();

  const patients = patientsData?.data || [];

  // Calculate age from birthDate
  const getAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  // Get initials from name
  const getInitials = (name: string) => name?.charAt(0).toUpperCase() || 'P';

  // Get first medical condition
  const getCondition = (medicalHistory: string[] | string) => {
    if (Array.isArray(medicalHistory)) {
      return medicalHistory[0] || 'Perawatan Umum';
    }
    return medicalHistory || 'Perawatan Umum';
  };

  // Assign colors based on index
  const getColor = (index: number) => {
    const colors = [
      'bg-[#E2F1EC] text-[#37A47C]',
      'bg-blue-100 text-blue-600',
      'bg-amber-100 text-amber-600',
      'bg-rose-100 text-rose-600',
      'bg-slate-100 text-slate-600'
    ];
    return colors[index % colors.length];
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6]">
        <div className="flex items-center justify-center flex-1">
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-100 max-w-sm">
            <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
            <h2 className="font-bold text-[#1B4332] mb-2">Gagal Memuat Data</h2>
            <p className="text-slate-500 text-sm">Maaf, kami tidak dapat memuat daftar pasien.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6]">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Profil Pasien</h1>
          <p className="text-sm text-slate-500 font-light mt-1">Kelola data kesehatan lansia Anda</p>
        </div>
      </header>

      {/* Patient List */}
      <div className="space-y-4 flex-1">
        {patients.length > 0 ? (
          patients.map((patient: any, index: number) => (
            <Link key={patient.id} href={`/dashboard/patients/${patient.id}`} className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:border-[#37A47C]/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${getColor(index)} rounded-2xl flex items-center justify-center shrink-0 font-serif font-bold text-xl relative overflow-hidden`}>
                   <span className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></span>
                   {getInitials(patient.name)}
                </div>
                <div>
                  <h3 className="font-bold text-[#1B4332] text-lg leading-tight mb-1">{patient.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="px-2 py-0.5 bg-slate-100 rounded-md">{getAge(patient.dateOfBirth)} Thn</span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 rounded-md">{getCondition(patient.medicalHistory)}</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#37A47C] group-hover:text-white transition-colors">
                <ChevronRight size={20} />
              </div>
            </Link>
          ))
        ) : (
          /* Empty State */
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center justify-center text-center py-16 mt-4">
             <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
               <User size={40} />
             </div>
             <h3 className="font-bold text-[#1B4332] text-lg mb-2">Belum ada pasien</h3>
             <p className="text-sm text-slate-500 font-light max-w-[240px]">
               Tambahkan profil medis lansia Anda untuk dapat memesan layanan homecare PARING.
             </p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="mt-8 relative z-20">
        <Button onClick={() => window.location.href='/dashboard/patients/new'} className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 border-0">
          <Plus size={20} className="mr-2"/>
          Tambah Pasien Baru
        </Button>
      </div>
    </div>
  );
}

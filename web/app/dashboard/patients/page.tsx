'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { User, Plus, ChevronRight, FileText, Loader2 } from 'lucide-react';
import { patientsAPI } from '@/lib/api-client';

export default function PatientsList() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await patientsAPI.getProfile();
        // Handle both array and single patient response
        if (Array.isArray(data.data)) {
          setPatients(data.data);
        } else if (data.data) {
          setPatients([data.data]);
        } else if (Array.isArray(data)) {
          setPatients(data);
        } else {
          setPatients([]);
        }
      } catch (err: any) {
        console.error('Failed to fetch patients:', err);
        setError(err.message || 'Failed to load patients');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (error) {
    return (
      <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6] items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-sm">
          <p className="text-red-700 font-semibold mb-4">Error Loading Patients</p>
          <p className="text-red-600 text-sm mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Retry</button>
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

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#37A47C]" />
        </div>
      )}

      {!loading && (
        <>
      {/* Patient List */}
      <div className="space-y-4 flex-1">
        {patients.length > 0 ? (
          patients.map((p) => (
            <Link key={p.id} href={`/dashboard/patients/${p.id}`} className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:border-[#37A47C]/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${p.color || 'bg-[#E2F1EC] text-[#37A47C]'} rounded-2xl flex items-center justify-center shrink-0 font-serif font-bold text-xl relative overflow-hidden`}>
                   <span className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></span>
                   {p.name?.charAt(0) || 'P'}
                </div>
                <div>
                  <h3 className="font-bold text-[#1B4332] text-lg leading-tight mb-1">{p.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    {p.age && <span className="px-2 py-0.5 bg-slate-100 rounded-md">{p.age} Thn</span>}
                    {p.condition && <span className="px-2 py-0.5 bg-red-50 text-red-500 rounded-md">{p.condition}</span>}
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
        </>
      )}
    </div>
  );
}

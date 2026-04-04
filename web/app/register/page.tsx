'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Radio } from '@/components/ui/Radio';
import { Textarea } from '@/components/ui/Textarea';
import { 
  Heart, Mail, Lock, User, Phone, ArrowLeft, 
  UserCircle, Briefcase, ChevronRight, Check
} from 'lucide-react';

export default function RegisterPage() {
  const [role, setRole] = useState<'PATIENT' | 'NURSE'>('PATIENT');
  const [step, setStep] = useState(0); // 0: Initial Register, 1-5: Nurse Detailing
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [nurseData, setNurseData] = useState({
    experience: '',
    specializations: [] as string[],
    bio: '',
    documents: {
      str: false,
      ktp: false,
      certification: false
    },
    serviceTypes: [] as string[],
    availability: '',
    location: ''
  });

  const handleRegister = () => {
    // In a real app, we would call the registration API here.
    if (role === 'PATIENT') {
      localStorage.setItem('userRole', role);
      window.location.href = '/dashboard';
    } else {
      // For Nurse, move to detailing steps
      setStep(1);
    }
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const toggleSpecialization = (spec: string) => {
    setNurseData(prev => ({
      ...prev,
      specializations: prev.specializations.includes(spec)
        ? prev.specializations.filter(s => s !== spec)
        : [...prev.specializations, spec]
    }));
  };

  // Step 0: Initial Registration Form
  if (step === 0) {
    return (
      <div className="min-h-screen bg-[#FBF9F6] flex flex-col font-sans">
        <div className="flex-1 max-w-md w-full mx-auto px-6 py-8 flex flex-col">
          {/* Header */}
          <div className="mb-8 mt-4">
            <Link href="/" className="inline-block p-2 -ml-2 mb-4 text-slate-500 hover:text-slate-800 transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Buat Akun</h1>
            <p className="text-slate-500 font-light text-sm">Bergabung dengan PARING untuk memberikan perawatan terbaik bagi lansia Anda.</p>
          </div>

          {/* Form */}
          <form className="space-y-4 flex-1">
            {/* Role Selection */}
            <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm mb-6">
              <label className="block text-[10px] font-black text-slate-400 mb-4 ml-1 uppercase tracking-[0.2em]">Daftar Sebagai</label>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setRole('PATIENT')}
                  className={`group relative flex flex-col items-center gap-3 p-5 rounded-[1.5rem] border-2 transition-all cursor-pointer ${role === 'PATIENT' ? 'border-[#37A47C] bg-[#E2F1EC]/30' : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${role === 'PATIENT' ? 'bg-[#37A47C] text-white shadow-lg shadow-[#37A47C]/20' : 'bg-white text-slate-400'}`}>
                    <UserCircle size={28} />
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-bold ${role === 'PATIENT' ? 'text-[#1B4332]' : 'text-slate-500'}`}>Keluarga</p>
                    <p className={`text-[10px] mt-0.5 ${role === 'PATIENT' ? 'text-[#37A47C]' : 'text-slate-400'}`}>Cari Perawat</p>
                  </div>
                  <div className="mt-1">
                    <Radio label="" checked={role === 'PATIENT'} onChange={() => setRole('PATIENT')} />
                  </div>
                </div>

                <div
                  onClick={() => setRole('NURSE')}
                  className={`group relative flex flex-col items-center gap-3 p-5 rounded-[1.5rem] border-2 transition-all cursor-pointer ${role === 'NURSE' ? 'border-[#37A47C] bg-[#E2F1EC]/30' : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${role === 'NURSE' ? 'bg-[#37A47C] text-white shadow-lg shadow-[#37A47C]/20' : 'bg-white text-slate-400'}`}>
                    <Briefcase size={28} />
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-bold ${role === 'NURSE' ? 'text-[#1B4332]' : 'text-slate-500'}`}>Perawat</p>
                    <p className={`text-[10px] mt-0.5 ${role === 'NURSE' ? 'text-[#37A47C]' : 'text-slate-400'}`}>Beri Layanan</p>
                  </div>
                  <div className="mt-1">
                    <Radio label="" checked={role === 'NURSE'} onChange={() => setRole('NURSE')} />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Nama Lengkap</label>
                <Input
                  icon={<User size={18} />}
                  placeholder="Mis. Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email</label>
                <Input
                  type="email"
                  icon={<Mail size={18} />}
                  placeholder="budi@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Nomor WhatsApp</label>
                <Input
                  type="tel"
                  icon={<Phone size={18} />}
                  placeholder="0812xxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Kata Sandi</label>
                <Input
                  type="password"
                  icon={<Lock size={18} />}
                  placeholder="Minimal 8 karakter"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <div className="pt-6 pb-8 mt-auto">
                <Button type="button" onClick={handleRegister} className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20">
                  Daftar Sekarang
                </Button>

                <p className="text-center text-sm text-slate-500 mt-6 font-light">
                  Sudah punya akun?{' '}
                  <Link href="/login" className="text-[#37A47C] font-bold hover:underline">
                    Masuk di sini
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Nurse Detailing Stepper
  return (
    <div className="min-h-screen bg-[#FBF9F6] flex flex-col font-sans">
      <div className="flex-1 max-w-md w-full mx-auto px-6 py-8 flex flex-col">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handleBack} className="p-2 -ml-2 text-slate-500 hover:text-slate-800 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 mx-4">
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#37A47C] transition-all duration-300 ease-out"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-bold text-[#37A47C]">Langkah {step}/5</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 flex flex-col">
          {step === 1 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-[#E2F1EC] rounded-3xl flex items-center justify-center text-[#37A47C] mb-6">
                  <Heart size={40} fill="currentColor" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#1B4332] mb-3">Selamat Bergabung!</h2>
                <p className="text-slate-500 font-light leading-relaxed">
                  Mari lengkapi profil Anda agar keluarga dapat mengenal Anda lebih baik dan mempercayakan perawatan lansia mereka kepada Anda.
                </p>
              </div>
              <div className="mt-auto pb-8">
                <Button onClick={handleNext} className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20">
                  Lanjutkan <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-2xl font-bold text-[#1B4332] mb-1">Pengalaman & Keahlian</h2>
              <p className="text-slate-500 text-sm mb-8">Beri tahu kami tentang latar belakang profesional Anda.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase tracking-wider">Tahun Pengalaman</label>
                  <Input 
                    type="number"
                    icon={<Briefcase size={18} />}
                    placeholder="Contoh: 5"
                    value={nurseData.experience}
                    onChange={(e) => setNurseData({...nurseData, experience: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-3 ml-1 uppercase tracking-wider">Spesialisasi</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['Lansia / Geriatri', 'Pasca Stroke', 'Pasca Operasi', 'Perawatan Luka', 'Pendampingan Bedridden'].map((spec) => (
                      <div 
                        key={spec}
                        onClick={() => toggleSpecialization(spec)}
                        className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${nurseData.specializations.includes(spec) ? 'border-[#37A47C] bg-[#E2F1EC]/30' : 'border-white bg-white hover:border-slate-200'}`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mr-3 transition-colors ${nurseData.specializations.includes(spec) ? 'bg-[#37A47C] border-[#37A47C] text-white' : 'bg-white border-slate-200'}`}>
                          {nurseData.specializations.includes(spec) && <Check size={14} strokeWidth={4} />}
                        </div>
                        <span className={`text-sm font-medium ${nurseData.specializations.includes(spec) ? 'text-[#1B4332]' : 'text-slate-600'}`}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase tracking-wider">Biodata Singkat</label>
                  <Textarea 
                    placeholder="Ceritakan sedikit tentang diri Anda dan pendekatan perawatan Anda..."
                    className="min-h-[120px]"
                    value={nurseData.bio}
                    onChange={(e) => setNurseData({...nurseData, bio: e.target.value})}
                  />
                </div>
              </div>

              <div className="mt-8 pb-8">
                <Button onClick={handleNext} className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20">
                  Lanjutkan <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Placeholder for steps 3-5 */}
          {step > 2 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-slate-400 mb-4 italic">Langkah {step} dalam pengembangan...</p>
              <Button onClick={handleNext} className="mt-4">Lanjut (Debug)</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

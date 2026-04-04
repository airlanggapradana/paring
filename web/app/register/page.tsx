'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Radio } from '@/components/ui/Radio';
import { Textarea } from '@/components/ui/Textarea';
import { 
  Heart, Mail, Lock, User, Phone, ArrowLeft, 
  UserCircle, Briefcase, ChevronRight, Check, 
  UploadCloud, MapPin, Clock, ShieldCheck, FileText,
  CreditCard, Award
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

  const handleFinalSubmit = () => {
    localStorage.setItem('userRole', 'NURSE');
    // In a real app, we'd save all nurseData to the backend here
    window.location.href = '/nurse/dashboard';
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

  const toggleServiceType = (type: string) => {
    setNurseData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(type)
        ? prev.serviceTypes.filter(t => t !== type)
        : [...prev.serviceTypes, type]
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

          {step === 3 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-2xl font-bold text-[#1B4332] mb-1">Verifikasi Dokumen</h2>
              <p className="text-slate-500 text-sm mb-8">Unggah dokumen pendukung untuk memverifikasi keahlian Anda.</p>

              <div className="space-y-4">
                {[
                  { id: 'str', label: 'STR (Surat Tanda Registrasi)', icon: <FileText className="text-blue-500" /> },
                  { id: 'ktp', label: 'KTP (Kartu Tanda Penduduk)', icon: <CreditCard className="text-purple-500" /> },
                  { id: 'certification', label: 'Ijazah / Sertifikat Pelatihan', icon: <Award className="text-orange-500" /> },
                ].map((doc) => (
                  <div key={doc.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                        {doc.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1B4332]">{doc.label}</p>
                        <p className="text-[10px] text-slate-400">Format: PDF, JPG, atau PNG (Maks. 5MB)</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setNurseData({
                        ...nurseData, 
                        documents: { ...nurseData.documents, [doc.id]: !nurseData.documents[doc.id as keyof typeof nurseData.documents] }
                      })}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${nurseData.documents[doc.id as keyof typeof nurseData.documents] ? 'bg-[#37A47C] text-white' : 'bg-[#E2F1EC] text-[#37A47C]'}`}
                    >
                      {nurseData.documents[doc.id as keyof typeof nurseData.documents] ? <Check size={20} /> : <UploadCloud size={20} />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 pb-8">
                <Button onClick={handleNext} className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20">
                  Lanjutkan <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-2xl font-bold text-[#1B4332] mb-1">Preferensi Kerja</h2>
              <p className="text-slate-500 text-sm mb-8">Tentukan bagaimana dan di mana Anda ingin bekerja.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-3 ml-1 uppercase tracking-wider">Jenis Layanan</label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'visit', label: 'Kunjungan (Harian)', desc: 'Datang untuk durasi tertentu' },
                      { id: 'live-out', label: 'Menginap (Live-out)', desc: 'Bekerja shift tanpa menginap' },
                      { id: 'live-in', label: 'Menginap (Live-in)', desc: 'Tinggal bersama pasien' },
                    ].map((type) => (
                      <div 
                        key={type.id}
                        onClick={() => toggleServiceType(type.id)}
                        className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${nurseData.serviceTypes.includes(type.id) ? 'border-[#37A47C] bg-[#E2F1EC]/30' : 'border-white bg-white hover:border-slate-200'}`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mr-3 transition-colors ${nurseData.serviceTypes.includes(type.id) ? 'bg-[#37A47C] border-[#37A47C] text-white' : 'bg-white border-slate-200'}`}>
                          {nurseData.serviceTypes.includes(type.id) && <Check size={14} strokeWidth={4} />}
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${nurseData.serviceTypes.includes(type.id) ? 'text-[#1B4332]' : 'text-slate-600'}`}>{type.label}</p>
                          <p className="text-[10px] text-slate-400">{type.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase tracking-wider">Ketersediaan Waktu</label>
                  <Input 
                    icon={<Clock size={18} />}
                    placeholder="Contoh: Senin - Jumat, 08:00 - 17:00"
                    value={nurseData.availability}
                    onChange={(e) => setNurseData({...nurseData, availability: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase tracking-wider">Lokasi Jangkauan</label>
                  <Input 
                    icon={<MapPin size={18} />}
                    placeholder="Contoh: Jakarta Selatan, Depok"
                    value={nurseData.location}
                    onChange={(e) => setNurseData({...nurseData, location: e.target.value})}
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

          {step === 5 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="font-serif text-2xl font-bold text-[#1B4332] mb-1">Tinjauan Profil</h2>
              <p className="text-slate-500 text-sm mb-8">Pastikan semua data sudah benar sebelum mengirimkan.</p>

              <div className="space-y-4 flex-1">
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Informasi Akun</h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold text-[#1B4332]">{formData.name || 'Belum diisi'}</p>
                      <p className="text-xs text-slate-500">{formData.email}</p>
                      <p className="text-xs text-slate-500">{formData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-50">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Pengalaman & Keahlian</h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-slate-600"><span className="font-bold">{nurseData.experience || '0'} Tahun</span> Pengalaman</p>
                      <div className="flex flex-wrap gap-1.5">
                        {nurseData.specializations.map(s => (
                          <span key={s} className="px-2 py-0.5 bg-[#E2F1EC] text-[#37A47C] text-[10px] font-bold rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-50">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Preferensi Layanan</h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-slate-600 font-medium">
                        {nurseData.serviceTypes.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ') || 'Belum dipilih'}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin size={14} className="text-[#37A47C]" />
                        <span>{nurseData.location || 'Semua Area'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-[#37A47C]" />
                      <span className="text-xs font-bold text-[#1B4332]">Dokumen Terpilih</span>
                    </div>
                    <div className="flex -space-x-1">
                      {Object.values(nurseData.documents).map((doc, i) => doc && (
                        <div key={i} className="w-5 h-5 rounded-full bg-[#37A47C] border-2 border-white flex items-center justify-center">
                          <Check size={10} className="text-white" strokeWidth={4} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#E2F1EC] p-4 rounded-2xl flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#37A47C] flex-shrink-0 flex items-center justify-center text-white">
                    <Check size={18} />
                  </div>
                  <p className="text-[11px] text-[#1B4332] leading-relaxed">
                    Dengan menekan tombol di bawah, Anda menyetujui syarat dan ketentuan PARING sebagai mitra perawat.
                  </p>
                </div>
              </div>

              <div className="mt-8 pb-8">
                <Button onClick={handleFinalSubmit} className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20">
                  Konfirmasi & Selesai
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

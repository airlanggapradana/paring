'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, User, Mail, Phone, Lock, FileText, Upload, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useRegisterUser, useCreateNurseProfile } from '@/lib/hooks/useApi';
import { toast } from 'sonner';

// Validation schemas
const step1Schema = z.object({
  fullName: z.string().min(3, 'Nama harus minimal 3 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().regex(/^62\d{9,}$/, 'Nomor WhatsApp harus dimulai 62 dan minimal 10 digit'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
});

const step2Schema = z.object({
  strNumber: z.string().min(5, 'Nomor STR harus valid'),
  yearsOfExperience: z.string().regex(/^\d+$/, 'Harus berupa angka'),
  specializations: z.string().min(3, 'Spesialisasi harus diisi'),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

export default function NurseRegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Step1Data & Step2Data>>({});
  const [ktpFile, setKtpFile] = useState<File | null>(null);
  const [strFile, setStrFile] = useState<File | null>(null);
  const [certFile, setCertFile] = useState<File | null>(null);

  const { mutate: registerUser, isPending: isRegisterPending } = useRegisterUser();
  const { mutate: createNurseProfile, isPending: isProfilePending } = useCreateNurseProfile();

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  const onStep1Submit = (data: Step1Data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const onStep2Submit = (data: Step2Data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(3);
  };

  const onStep3Submit = async () => {
    if (!ktpFile || !strFile) {
      toast.error('KTP dan STR harus diunggah');
      return;
    }

    if (!formData.email || !formData.password || !formData.fullName) {
      toast.error('Data tidak lengkap');
      return;
    }

    // Register user first
    registerUser(
      {
        email: formData.email,
        password: formData.password,
        name: formData.fullName,
        phone: formData.phone,
        role: 'NURSE',
      },
      {
        onSuccess: (authResponse) => {
          const nurseId = authResponse.data?.userId;

          // Then create nurse profile
          createNurseProfile(
            {
              userId: nurseId,
              specialization: formData.specializations || '',
              experienceYears: parseInt(formData.yearsOfExperience || '0'),
            },
            {
              onSuccess: () => {
                toast.success('Pendaftaran berhasil! Silakan login dengan akun Anda.');
                router.push('/login');
              },
              onError: (error: any) => {
                const msg = error.response?.data?.message || 'Gagal membuat profil perawat';
                toast.error(msg);
              },
            }
          );
        },
        onError: (error: any) => {
          const msg = error.response?.data?.message || 'Gagal mendaftar akun';
          toast.error(msg);
        },
      }
    );
  };

  const isPending = isRegisterPending || isProfilePending;

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800">
      <header className="px-6 py-6 bg-white border-b border-slate-100 flex items-center gap-4 sticky top-0 z-50">
        <Link href="/login" className="w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-500 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="font-serif text-xl font-bold text-[#1B4332]">Daftar Akun Perawat</h1>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">Langkah {step} dari 3</p>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-6 py-8">
        {/* Step 1: Basic Account Info */}
        {step === 1 && (
          <form onSubmit={handleSubmit1(onStep1Submit)} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Nama Lengkap</label>
              <Input
                type="text"
                placeholder="Contoh: Ners Rina Suryani"
                {...register1('fullName')}
                className={errors1.fullName ? 'border-red-500' : ''}
              />
              {errors1.fullName && <p className="text-xs text-red-500 mt-1">{errors1.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Email Aktif</label>
              <Input
                type="email"
                placeholder="email@anda.com"
                {...register1('email')}
                className={errors1.email ? 'border-red-500' : ''}
              />
              {errors1.email && <p className="text-xs text-red-500 mt-1">{errors1.email.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">No. WhatsApp</label>
              <Input
                type="tel"
                placeholder="62812345678"
                {...register1('phone')}
                className={errors1.phone ? 'border-red-500' : ''}
              />
              {errors1.phone && <p className="text-xs text-red-500 mt-1">{errors1.phone.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Password</label>
              <Input
                type="password"
                placeholder="Minimal 8 karakter"
                {...register1('password')}
                className={errors1.password ? 'border-red-500' : ''}
              />
              {errors1.password && <p className="text-xs text-red-500 mt-1">{errors1.password.message}</p>}
            </div>
            <Button type="submit" className="w-full h-14 justify-center bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 text-lg">
              Langkah Berikutnya
            </Button>
          </form>
        )}

        {/* Step 2: Professional Data */}
        {step === 2 && (
          <form onSubmit={handleSubmit2(onStep2Submit)} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">No. STR Aktif</label>
              <Input
                type="text"
                placeholder="Masukkan nomor Surat Tanda Registrasi"
                {...register2('strNumber')}
                className={errors2.strNumber ? 'border-red-500' : ''}
              />
              {errors2.strNumber && <p className="text-xs text-red-500 mt-1">{errors2.strNumber.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Pengalaman Kerja (Tahun)</label>
              <Input
                type="number"
                placeholder="Contoh: 5"
                {...register2('yearsOfExperience')}
                className={errors2.yearsOfExperience ? 'border-red-500' : ''}
              />
              {errors2.yearsOfExperience && <p className="text-xs text-red-500 mt-1">{errors2.yearsOfExperience.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Spesialisasi / Keahlian Utama</label>
              <Input
                type="text"
                placeholder="Contoh: Perawatan Luka, Gerontologi"
                {...register2('specializations')}
                className={errors2.specializations ? 'border-red-500' : ''}
              />
              {errors2.specializations && <p className="text-xs text-red-500 mt-1">{errors2.specializations.message}</p>}
            </div>
            <div className="flex gap-4">
              <Button type="button" onClick={() => setStep(1)} variant="outline" className="w-full h-14 justify-center bg-slate-100 border-slate-200 text-slate-600 rounded-2xl">
                Kembali
              </Button>
              <Button type="submit" className="w-full h-14 justify-center bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 text-lg">
                Langkah Terakhir
              </Button>
            </div>
          </form>
        )}

        {/* Step 3: Document Upload */}
        {step === 3 && (
          <div className="space-y-6">
            <p className="text-center text-sm text-slate-600 mb-4">Unggah dokumen untuk verifikasi oleh tim PARING. Pastikan foto jelas dan tidak buram.</p>
            
            <div className="p-6 border-2 border-dashed border-slate-300 rounded-2xl text-center">
              <Upload size={32} className="mx-auto text-slate-400 mb-2" />
              <h3 className="font-bold text-slate-700">Scan KTP</h3>
              <p className="text-xs text-slate-500 mb-3">Format JPG, PNG. Maks 2MB.</p>
              <p className="text-xs font-bold text-[#37A47C] mb-2">{ktpFile ? ktpFile.name : 'File tidak dipilih'}</p>
              <input
                type="file"
                accept="image/jpeg,image/png"
                onChange={(e) => setKtpFile(e.target.files?.[0] || null)}
                className="hidden"
                id="ktp-input"
              />
              <Button
                type="button"
                variant="outline"
                className="text-xs h-8"
                onClick={() => document.getElementById('ktp-input')?.click()}
              >
                {ktpFile ? 'Ubah File' : 'Pilih File'}
              </Button>
            </div>

            <div className="p-6 border-2 border-dashed border-slate-300 rounded-2xl text-center">
              <Upload size={32} className="mx-auto text-slate-400 mb-2" />
              <h3 className="font-bold text-slate-700">Scan STR</h3>
              <p className="text-xs text-slate-500 mb-3">Format PDF, JPG, PNG. Maks 2MB.</p>
              <p className="text-xs font-bold text-[#37A47C] mb-2">{strFile ? strFile.name : 'File tidak dipilih'}</p>
              <input
                type="file"
                accept="application/pdf,image/jpeg,image/png"
                onChange={(e) => setStrFile(e.target.files?.[0] || null)}
                className="hidden"
                id="str-input"
              />
              <Button
                type="button"
                variant="outline"
                className="text-xs h-8"
                onClick={() => document.getElementById('str-input')?.click()}
              >
                {strFile ? 'Ubah File' : 'Pilih File'}
              </Button>
            </div>

            <div className="p-6 border-2 border-dashed border-slate-300 rounded-2xl text-center">
              <Upload size={32} className="mx-auto text-slate-400 mb-2" />
              <h3 className="font-bold text-slate-700">Sertifikasi Lainnya (Opsional)</h3>
              <p className="text-xs text-slate-500 mb-3">Contoh: BTCLS, Pelatihan ICU</p>
              <p className="text-xs font-bold text-[#37A47C] mb-2">{certFile ? certFile.name : 'File tidak dipilih'}</p>
              <input
                type="file"
                accept="application/pdf,image/jpeg,image/png"
                onChange={(e) => setCertFile(e.target.files?.[0] || null)}
                className="hidden"
                id="cert-input"
              />
              <Button
                type="button"
                variant="outline"
                className="text-xs h-8"
                onClick={() => document.getElementById('cert-input')?.click()}
              >
                {certFile ? 'Ubah File' : 'Pilih File'}
              </Button>
            </div>

            <div className="flex gap-4">
              <Button type="button" onClick={() => setStep(2)} variant="outline" className="w-full h-14 justify-center bg-slate-100 border-slate-200 text-slate-600 rounded-2xl" disabled={isPending}>
                Kembali
              </Button>
              <Button
                type="button"
                onClick={onStep3Submit}
                disabled={isPending}
                className="w-full h-14 justify-center bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 text-lg disabled:opacity-50"
              >
                {isPending ? 'Memproses...' : 'Kirim & Selesaikan Pendaftaran'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

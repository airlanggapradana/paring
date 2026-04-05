'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { ArrowLeft, User, Activity, AlertCircle, Phone, Save, Loader2 } from 'lucide-react';

export default function AddPatient() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    address: '',
    bloodPressure: '',
    bloodSugar: '',
    isDiabetes: false,
    isBedridden: false,
    allergies: '',
    medicalNotes: '',
    emergencyContact: '',
    emergencyPhone: '',
    aiConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement> | boolean) => {
    if (typeof e === 'boolean') {
      // Direct boolean from checkbox component
      setFormData((prev) => ({
        ...prev,
        [name]: e,
      }));
    } else if ('target' in e) {
      // React ChangeEvent
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Nama pasien harus diisi';
    if (!formData.age || parseInt(formData.age) < 1) return 'Usia harus diisi dengan benar';
    if (!formData.gender) return 'Jenis kelamin harus dipilih';
    if (!formData.address.trim()) return 'Alamat harus diisi';
    if (!formData.emergencyContact.trim()) return 'Nama kontak darurat harus diisi';
    if (!formData.emergencyPhone.trim()) return 'Nomor telepon kontak darurat harus diisi';
    if (!formData.aiConsent) return 'Anda harus menyetujui penggunaan AI PARING';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const token = localStorage.getItem('paring_auth_token');
      
      // Create patient profile
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          age: parseInt(formData.age),
          gender: formData.gender,
          weight: formData.weight ? parseInt(formData.weight) : null,
          height: formData.height ? parseInt(formData.height) : null,
          address: formData.address,
          medicalHistory: {
            bloodPressure: formData.bloodPressure,
            bloodSugar: formData.bloodSugar,
            isDiabetes: formData.isDiabetes,
            isBedridden: formData.isBedridden,
            allergies: formData.allergies,
            notes: formData.medicalNotes,
          },
          emergencyContact: {
            name: formData.emergencyContact,
            phone: formData.emergencyPhone,
          },
          aiConsent: formData.aiConsent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal menyimpan data pasien');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/patients');
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat menyimpan data pasien');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#FBF9F6] flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 text-center max-w-md shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1B4332] mb-2">Berhasil!</h2>
          <p className="text-slate-600 mb-6">Data pasien telah berhasil disimpan. Anda akan dialihkan ke halaman pasien.</p>
          <Loader2 className="w-6 h-6 animate-spin text-[#37A47C] mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-6 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen bg-[#FBF9F6]">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/patients" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-[#37A47C] hover:bg-slate-50">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Tambah Pasien</h1>
          <p className="text-sm text-slate-500 font-light mt-1">Lengkapi data profil medis lansia</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-light">
            {error}
          </div>
        )}

        {/* Basic Info Section */}
        <section className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#E2F1EC] rounded-xl flex items-center justify-center text-[#37A47C]">
              <User size={20} />
            </div>
            <h2 className="font-bold text-lg text-[#1B4332]">Data Dasar</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                Nama Lengkap Pasien <span className="text-red-500">*</span>
              </label>
              <Input
                name="name"
                placeholder="Mis. Ibu Kartini"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                  Usia (Tahun) <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  name="age"
                  placeholder="60"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                  Jenis Kelamin <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full h-12 px-4 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#37A47C] transition-colors text-slate-800 appearance-none disabled:opacity-50"
                  >
                    <option value="">Pilih</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Berat Badan (kg)</label>
                <Input
                  type="number"
                  name="weight"
                  placeholder="55"
                  value={formData.weight}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Tinggi Badan (cm)</label>
                <Input
                  type="number"
                  name="height"
                  placeholder="160"
                  value={formData.height}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                Alamat Lengkap <span className="text-red-500">*</span>
              </label>
              <Textarea
                name="address"
                placeholder="Alamat domisili saat ini"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </section>

        {/* Medical History Section */}
        <section className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FFF4F2] rounded-xl flex items-center justify-center text-[#ff4d4f]">
              <Activity size={20} />
            </div>
            <h2 className="font-bold text-lg text-[#1B4332]">Kondisi Medis</h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Tekanan Darah Normal</label>
                <Input
                  name="bloodPressure"
                  placeholder="120/80"
                  value={formData.bloodPressure}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Gula Darah Rata-rata</label>
                <Input
                  name="bloodSugar"
                  placeholder="110 mg/dL"
                  value={formData.bloodSugar}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <Checkbox
                name="isDiabetes"
                label="Memiliki Riwayat Diabetes"
                checked={formData.isDiabetes}
                onChange={handleCheckboxChange('isDiabetes')}
                disabled={isLoading}
              />
              <Checkbox
                name="isBedridden"
                label="Pasien Tirah Baring (Bedridden)"
                checked={formData.isBedridden}
                onChange={handleCheckboxChange('isBedridden')}
                disabled={isLoading}
              />
            </div>

            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Alergi Obat/Makanan</label>
              <Input
                name="allergies"
                placeholder="Mis. Paracetamol, Seafood"
                value={formData.allergies}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Catatan Tambahan untuk Perawat</label>
              <Textarea
                name="medicalNotes"
                placeholder="Kondisi khusus, kebiasaan, atau pantangan..."
                rows={3}
                value={formData.medicalNotes}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FFF4F2] rounded-xl flex items-center justify-center text-[#ff4d4f]">
              <AlertCircle size={20} />
            </div>
            <h2 className="font-bold text-lg text-[#1B4332]">Kontak Darurat</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                Nama Kontak Darurat <span className="text-red-500">*</span>
              </label>
              <Input
                name="emergencyContact"
                placeholder="Nama kerabat"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="emergencyPhone"
                icon={<Phone size={18} />}
                placeholder="08xxxxxxxxxx"
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="pt-4">
              <Checkbox
                name="aiConsent"
                label="Saya mengizinkan PARING AI untuk menganalisis laporan medis pasien guna mendapatkan rekomendasi perawatan terbaik."
                checked={formData.aiConsent}
                onChange={handleCheckboxChange('aiConsent')}
                disabled={isLoading}
              />
            </div>
          </div>
        </section>

        <div className="pt-4 pb-8">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/30 disabled:opacity-50 flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Menyimpan...
              </>
            ) : (
              <>
                <Save size={20} />
                Simpan Profil Pasien
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}


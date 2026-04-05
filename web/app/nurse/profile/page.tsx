'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Shield, Award, MapPin, Camera, Edit3, Save, Star, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { authAPI, nursesAPI } from '@/lib/api-client';

export default function NurseProfile() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    bio: '',
    yearsOfExperience: 0,
    location: '',
    certifications: []
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const response = await authAPI.getProfile();
        if (response.data) {
          setProfile(response.data);
          setFormData({
            bio: response.data.bio || '',
            yearsOfExperience: response.data.yearsOfExperience || 0,
            location: response.data.location || '',
            certifications: response.data.certifications || []
          });
        }
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    if (!profile?.id) return;
    
    try {
      setIsSaving(true);
      const response = await nursesAPI.update(profile.id, {
        bio: formData.bio,
        yearsOfExperience: formData.yearsOfExperience,
        location: formData.location,
        certifications: formData.certifications
      });
      
      if (response.success) {
        setProfile(response.data);
        setIsEditing(false);
      }
    } catch (err) {
      console.error('Failed to save profile:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('paring_auth_token');
      router.push('/login');
    } catch (err) {
      console.error('Logout failed:', err);
      router.push('/login');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="animate-spin text-[#37A47C]" />
          <p className="text-slate-600">Memuat profil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-20">
      {/* Photo Header */}
       <div className="relative h-64 bg-[#1B4332] rounded-b-[3rem] overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#37A47C] rounded-full blur-3xl opacity-30"></div>
         <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
           <div className="relative">
             <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-[2.5rem] border-4 border-white/30 flex items-center justify-center text-white overflow-hidden">
               <User size={48} />
             </div>
             <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#37A47C] text-white rounded-2xl border-4 border-[#1B4332] flex items-center justify-center shadow-lg">
               <Camera size={18} />
             </button>
           </div>
           <h1 className="mt-4 font-serif text-2xl font-bold text-white leading-tight">{profile?.user?.name || 'Profil Perawat'}</h1>
           <div className="flex items-center text-emerald-100 text-xs gap-2 mt-1">
             <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">STR Aktif</span>
             <span className="flex items-center gap-1"><Star size={12} fill="currentColor" className="text-amber-400" /> {profile?.rating || 4.9}</span>
           </div>
         </div>
       </div>

      <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-20 space-y-6">
        {/* Verification Status Card */}
        <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E2F1EC] text-[#37A47C] rounded-2xl flex items-center justify-center">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#1B4332]">Status Verifikasi</h3>
              <p className="text-xs text-slate-500 font-medium leading-tight">Akun Anda telah terverifikasi penuh.</p>
            </div>
          </div>
          <CheckCircle2 size={24} className="text-[#37A47C]" />
        </div>

        {/* Profile Info Form */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-lg text-[#1B4332]">Data Profesional</h2>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 text-[#37A47C] bg-[#E2F1EC] rounded-xl hover:bg-[#37A47C] hover:text-white transition-colors"
            >
              <Edit3 size={18} />
            </button>
          </div>

           <div className="space-y-4">
             <div>
               <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Bio / Ringkasan</label>
               <Textarea 
                 placeholder="Ceritakan pengalaman Anda..." 
                 rows={3} 
                 value={formData.bio}
                 onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                 disabled={!isEditing}
                 className={!isEditing ? "bg-slate-50/50 border-transparent text-slate-600" : ""}
               />
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Pengalaman (Tahun)</label>
                 <Input 
                   type="number" 
                   value={formData.yearsOfExperience}
                   onChange={(e) => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) || 0 })}
                   disabled={!isEditing}
                   className={!isEditing ? "bg-slate-50/50 border-transparent text-slate-600" : ""}
                 />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Lokasi</label>
                 <Input 
                   value={formData.location}
                   onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                   disabled={!isEditing}
                   className={!isEditing ? "bg-slate-50/50 border-transparent text-slate-600" : ""}
                 />
               </div>
             </div>

             <div>
               <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1 uppercase tracking-widest">Sertifikasi & Keahlian</label>
               <div className="flex flex-wrap gap-2 mt-2">
                 {(formData.certifications || []).map((tag: string) => (
                   <span key={tag} className="text-xs bg-[#E2F1EC] text-[#37A47C] font-semibold px-3 py-1.5 rounded-lg border border-[#37A47C]/10">
                     {tag}
                   </span>
                 ))}
                 {isEditing && (
                   <button className="text-xs bg-slate-50 text-slate-400 font-bold px-3 py-1.5 rounded-lg border border-dashed border-slate-200">
                     + Tambah
                   </button>
                 )}
               </div>
             </div>
           </div>
        </div>

         {isEditing && (
           <Button 
             onClick={handleSaveProfile}
             disabled={isSaving}
             className="w-full h-14 justify-center bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 disabled:opacity-50"
           >
             {isSaving ? <Loader2 size={20} className="animate-spin mr-2" /> : <Save size={20} className="mr-2" />}
             {isSaving ? 'Menyimpan...' : 'Simpan Profil'}
           </Button>
         )}

         <button 
           onClick={handleLogout}
           className="w-full py-4 text-red-500 font-bold text-sm hover:bg-red-50 rounded-2xl transition-colors uppercase tracking-widest"
         >
           Keluar dari Akun
         </button>
      </div>
    </div>
  );
}

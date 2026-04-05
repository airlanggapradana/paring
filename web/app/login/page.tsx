'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Heart, Mail, Lock, ArrowLeft } from 'lucide-react';
import { authAPI } from '@/lib/api-client';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await authAPI.login(email, password);
      const { token, user } = response.data;
      localStorage.setItem('paring_auth_token', token);
      
      // Role-based navigation
      const role = user?.role || response.data.role;
      switch (role?.toUpperCase()) {
        case 'ADMIN':
          router.push('/admin/dashboard');
          break;
        case 'NURSE':
          router.push('/nurse/dashboard');
          break;
        case 'PATIENT':
        default:
          router.push('/dashboard');
          break;
      }
    } catch (err: any) {
      setError(err.message || 'Login gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] flex flex-col font-sans">
      <div className="flex-1 max-w-md w-full mx-auto px-6 py-8 flex flex-col justify-center">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#37A47C] rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-6 transform -rotate-6">
            <Heart size={32} />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Selamat Datang</h1>
          <p className="text-slate-500 font-light text-sm">Masuk ke akun PARING Anda.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-light">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email</label>
            <Input
              type="email"
              icon={<Mail size={18} />}
              placeholder="Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5 px-1">
              <label className="block text-xs font-bold text-slate-700">Kata Sandi</label>
              <Link href="/forgot-password" className="text-xs font-medium text-[#37A47C] hover:underline">
                Lupa Sandi?
              </Link>
            </div>
            <Input
              type="password"
              icon={<Lock size={18} />}
              placeholder="Kata Sandi Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="pt-8">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-14 justify-center text-lg bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 disabled:opacity-50"
            >
              {isLoading ? 'Memproses...' : 'Masuk'}
            </Button>

            <p className="text-center text-sm text-slate-500 mt-8 font-light">
              Belum punya akun?{' '}
              <Link href="/register" className="text-[#37A47C] font-bold hover:underline">
                Daftar
              </Link>
            </p>
          </div>
        </form>

        {/* Demo Credentials */}
        <div className="mt-10 bg-[#E2F1EC]/40 border border-[#37A47C]/20 rounded-2xl p-4 text-xs text-slate-600 font-light">
          <p className="font-bold text-[#1B4332] mb-2">Demo Credentials:</p>
          <ul className="space-y-1 text-slate-600">
            <li>Admin: admin@paring.com / Admin@123</li>
            <li>Patient: patient1@paring.com / Patient@123</li>
            <li>Nurse: nurse1@paring.com / Nurse@123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

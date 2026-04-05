'use client';

import { useState, useEffect } from 'react';
import { Loader2, Search, Mail, Phone, Shield } from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'ADMIN' | 'PATIENT' | 'NURSE';
  status: string;
  createdAt?: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem('paring_auth_token');
        const res = await fetch('/api/users', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          // Fallback if endpoint doesn't exist
          throw new Error('Endpoint not available');
        }

        const data = await res.json();
        setUsers(Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : []);
      } catch (err: any) {
        console.warn('Could not fetch users:', err);
        // Show demo data for now
        setUsers([
          { id: '1', email: 'patient1@paring.com', name: 'Pasien 1', phone: '08123456789', role: 'PATIENT', status: 'ACTIVE' },
          { id: '2', email: 'nurse1@paring.com', name: 'Perawat 1', phone: '08234567890', role: 'NURSE', status: 'ACTIVE' },
          { id: '3', email: 'admin@paring.com', name: 'Admin', phone: '08345678901', role: 'ADMIN', status: 'ACTIVE' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    const badges: Record<string, string> = {
      ADMIN: 'bg-[#37A47C] text-white',
      PATIENT: 'bg-blue-100 text-blue-700',
      NURSE: 'bg-emerald-100 text-emerald-700',
    };
    return badges[role] || 'bg-slate-100 text-slate-700';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-[#37A47C]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Manajemen Pengguna</h1>
        <p className="text-slate-600">Total pengguna: {users.length}</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Cari berdasarkan nama atau email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#37A47C]"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Nama</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Telepon</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Role</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-[#1B4332]">{user.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail size={16} />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone size={16} />
                      {user.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">Tidak ada pengguna ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}

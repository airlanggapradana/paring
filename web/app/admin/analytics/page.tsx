'use client';

import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function AdminAnalytics() {
  const stats = [
    { label: 'Total Revenue (Bulan Ini)', value: 'Rp 42.5M', change: '+12%', icon: DollarSign, color: 'bg-green-50 text-green-600' },
    { label: 'Total Booking', value: '85', change: '+8%', icon: BarChart3, color: 'bg-blue-50 text-blue-600' },
    { label: 'Active Users', value: '342', change: '+15%', icon: Users, color: 'bg-purple-50 text-purple-600' },
    { label: 'Growth Rate', value: '+18%', change: '+5%', icon: TrendingUp, color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#1B4332] mb-2">Analitik Platform</h1>
        <p className="text-slate-600">Pantau performa dan pertumbuhan PARING</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`${stat.color} rounded-2xl p-6 border border-slate-100`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-600 font-medium mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-[#1B4332]">{stat.value}</p>
                </div>
                <Icon size={24} className="opacity-40" />
              </div>
              <p className="text-xs font-bold text-green-600">{stat.change} dari bulan lalu</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="font-bold text-lg text-[#1B4332] mb-6">Revenue Trend (6 Bulan)</h2>
          <div className="space-y-4">
            {[
              { month: 'Jan', revenue: 28, percentage: 65 },
              { month: 'Feb', revenue: 32, percentage: 75 },
              { month: 'Mar', revenue: 38, percentage: 88 },
              { month: 'Apr', revenue: 42.5, percentage: 100 },
            ].map((data, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">{data.month}</span>
                  <span className="text-sm font-bold text-[#37A47C]">Rp {data.revenue}M</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#37A47C] h-full rounded-full" style={{ width: `${data.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="font-bold text-lg text-[#1B4332] mb-6">User Growth</h2>
          <div className="space-y-4">
            {[
              { role: 'Patients', count: 256, percentage: 75 },
              { role: 'Nurses', count: 67, percentage: 20 },
              { role: 'Admins', count: 19, percentage: 5 },
            ].map((data, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">{data.role}</span>
                  <span className="text-sm font-bold text-[#1B4332]">{data.count}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#37A47C] h-full rounded-full" style={{ width: `${data.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="font-bold text-lg text-[#1B4332] mb-6">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {[
            { action: 'Booking baru dibuat', detail: 'Ibu Kartini → Ners Rina', time: '2 jam lalu' },
            { action: 'Perawat baru terdaftar', detail: 'Ners Budiawan', time: '5 jam lalu' },
            { action: 'Pembayaran diterima', detail: 'Rp 500.000', time: '1 hari lalu' },
            { action: 'User baru mendaftar', detail: 'Pasien: Budi', time: '2 hari lalu' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div>
                <p className="font-semibold text-[#1B4332] text-sm">{activity.action}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.detail}</p>
              </div>
              <span className="text-xs text-slate-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

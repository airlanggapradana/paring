'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Plus, MessageCircle, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { consultationsAPI } from '@/lib/api-client';

export default function ConsultationList() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        setIsLoading(true);
        const response = await consultationsAPI.getList();
        setConsultations(response.data || []);
      } catch (err) {
        console.error('Failed to fetch consultations:', err);
        setConsultations([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  const filteredConsultations = consultations.filter((consultation: any) => {
    const searchLower = searchTerm.toLowerCase();
    const userName = consultation.otherUser?.user?.name || consultation.user?.name || '';
    const lastMessage = consultation.messages?.[0]?.content || '';
    return userName.toLowerCase().includes(searchLower) || lastMessage.toLowerCase().includes(searchLower);
  });

  if (isLoading) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="animate-spin text-[#37A47C]" />
          <p className="text-slate-600">Memuat konsultasi...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#FBF9F6] min-h-screen font-sans text-slate-800 pb-24 flex flex-col h-screen">
      
      {/* Header */}
      <header className="px-6 py-6 pb-4 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-50">
        <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Konsultasi</h1>
        <button className="w-10 h-10 bg-[#E2F1EC] text-[#37A47C] hover:bg-[#1B4332] hover:text-white rounded-full flex items-center justify-center transition-colors">
          <Plus size={20} />
        </button>
      </header>

       {/* Search */}
       <div className="px-6 py-4 bg-white">
         <div className="relative">
           <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
             <Search size={18} />
           </div>
           <input 
             type="text" 
             placeholder="Cari pesan atau nama perawat..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full h-12 pl-11 pr-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl focus:outline-none focus:border-[#37A47C] transition-colors text-slate-800 text-sm"
           />
         </div>
       </div>

       {/* Chat List */}
       <div className="flex-1 overflow-y-auto">
         {filteredConsultations.length === 0 ? (
           <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2">
             <MessageCircle size={40} className="opacity-30" />
             <p className="text-sm">Tidak ada konsultasi</p>
           </div>
         ) : (
           filteredConsultations.map((consultation: any, idx: number) => {
             const otherUser = consultation.otherUser?.user || consultation.user;
             const userName = otherUser?.name || 'Unknown';
             const lastMessage = consultation.messages?.[0];
             const unreadCount = consultation.messages?.filter((msg: any) => !msg.isRead).length || 0;
             const isOnline = consultation.otherUser?.isOnline || false;
             
             return (
               <Link key={consultation.id} href={`/dashboard/consultation/${consultation.id}`} className="flex items-center gap-4 px-6 py-4 bg-white hover:bg-slate-50 border-b border-slate-50 transition-colors">
                 <div className="w-14 h-14 bg-slate-200 rounded-2xl overflow-hidden shrink-0 relative">
                   <div className="absolute inset-0 bg-slate-300"></div>
                   {isOnline && (
                     <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                   )}
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-[#1B4332] truncate text-base">{userName}</h3>
                      <span className="text-xs font-medium text-slate-400">
                        {lastMessage?.createdAt ? new Date(lastMessage.createdAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : 'Baru'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 truncate flex items-center gap-1 font-light">
                      {lastMessage?.isRead && <CheckCircle2 size={14} className="text-[#37A47C]" />}
                      {lastMessage?.content || 'Belum ada pesan'}
                    </p>
                 </div>
                 {unreadCount > 0 && (
                   <div className="w-5 h-5 bg-[#ff4d4f] text-white text-[10px] font-bold flex items-center justify-center rounded-full shrink-0 shadow-sm border border-white">
                     {unreadCount}
                   </div>
                 )}
               </Link>
             );
           })
         )}
        
      </div>
    </div>
  );
}

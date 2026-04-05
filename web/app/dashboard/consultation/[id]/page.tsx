'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Phone, Video, MoreVertical, Send, Paperclip, ImageIcon, Loader2 } from 'lucide-react';
import { consultationsAPI } from '@/lib/api-client';

export default function ChatRoom() {
  const params = useParams();
  const consultationId = params.id as string;
  const [msg, setMsg] = useState('');
  const [consultation, setConsultation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchConsultation = async () => {
      try {
        setIsLoading(true);
        const response = await consultationsAPI.getDetail(consultationId);
        setConsultation(response.data);
        setMessages(response.data?.messages || []);
      } catch (err) {
        console.error('Failed to fetch consultation:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (consultationId) {
      fetchConsultation();
    }
  }, [consultationId]);

  const handleSendMessage = async () => {
    if (!msg.trim()) return;
    
    try {
      setIsSending(true);
      const response = await consultationsAPI.sendMessage(consultationId, msg);
      if (response.success) {
        setMsg('');
        // Add new message to the list
        setMessages([response.data, ...messages]);
      }
    } catch (err) {
      console.error('Failed to send message:', err);
    } finally {
      setIsSending(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="animate-spin text-[#37A47C]" />
          <p className="text-slate-600">Memuat chat...</p>
        </div>
      </div>
    );
  }

  const otherUser = consultation?.otherUser?.user || consultation?.user || {};
  const userName = otherUser?.name || 'Unknown';

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-800 flex flex-col h-screen">
      
       {/* Header */}
       <header className="px-4 py-4 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-50">
         <div className="flex items-center gap-3">
           <Link href="/dashboard/consultation" className="p-2 -ml-2 text-slate-500 hover:text-slate-800 rounded-full transition-colors">
             <ArrowLeft size={24} />
           </Link>
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden shrink-0 relative">
                <div className="absolute inset-0 bg-slate-300"></div>
                {consultation?.otherUser?.isOnline && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h2 className="font-bold text-[#1B4332] text-sm md:text-base leading-tight">{userName}</h2>
                <p className="text-[10px] md:text-xs text-[#37A47C] font-semibold">
                  {consultation?.otherUser?.isOnline ? 'Online' : 'Offline'}
                </p>
              </div>
           </div>
         </div>
        
        <div className="flex items-center gap-1 text-[#37A47C]">
          <button className="p-2 hover:bg-[#E2F1EC] rounded-full transition-colors"><Phone size={20} /></button>
          <button className="p-2 hover:bg-[#E2F1EC] rounded-full transition-colors hidden md:block"><Video size={20} /></button>
          <button className="p-2 hover:bg-[#E2F1EC] rounded-full transition-colors text-slate-500"><MoreVertical size={20} /></button>
        </div>
      </header>

       {/* Messages Area */}
       <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-3xl mx-auto w-full flex flex-col-reverse">
         {messages.map((message: any, idx: number) => {
           const isOwnMessage = message.senderId === consultation?.userId;
           const messageTime = message.createdAt ? new Date(message.createdAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : '';
           
           return (
             <div key={idx} className={`flex gap-3 ${isOwnMessage ? 'justify-end' : ''}`}>
               {!isOwnMessage && (
                 <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 overflow-hidden relative self-end">
                   <div className="absolute inset-0 bg-slate-300"></div>
                 </div>
               )}
               <div className={isOwnMessage ? 'text-right' : ''}>
                 <div className={`p-3 md:p-4 rounded-2xl shadow-sm ${
                   isOwnMessage 
                     ? 'bg-[#1B4332] text-white rounded-br-none' 
                     : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none'
                 } text-sm leading-relaxed font-light max-w-[85%]`}>
                   {message.content}
                 </div>
                 <p className={`text-[10px] text-slate-400 mt-1 font-medium ${isOwnMessage ? 'mr-1 text-right' : 'ml-1'}`}>
                   {messageTime}
                   {isOwnMessage && message.isRead && <span className="text-[#37A47C]"> · Dibaca</span>}
                 </p>
               </div>
             </div>
           );
         })}
         <div className="text-center my-6">
           <span className="bg-slate-200/50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Hari Ini</span>
         </div>
       </div>

       {/* Input Area */}
       <div className="bg-white border-t border-slate-100 px-4 py-3 pb-safe z-50">
         <div className="max-w-3xl mx-auto flex items-end gap-2">
           
           <button className="p-3 text-slate-400 hover:text-[#37A47C] bg-slate-50 rounded-full transition-colors shrink-0">
             <Paperclip size={20} />
           </button>
           
           <div className="flex-1 bg-[#F8FAFC] border border-slate-200 rounded-[1.5rem] flex items-end px-3 py-2 focus-within:border-[#37A47C] transition-colors">
             <textarea 
               value={msg}
               onChange={(e) => setMsg(e.target.value)}
               onKeyPress={(e) => {
                 if (e.key === 'Enter' && !e.shiftKey) {
                   e.preventDefault();
                   handleSendMessage();
                 }
               }}
               placeholder="Ketik balasan..." 
               disabled={isSending}
               className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-slate-800 resize-none max-h-32 p-1 min-h-[24px] disabled:opacity-50"
               rows={1}
             />
             <button className="p-1 mb-0.5 text-slate-400 hover:text-[#37A47C] transition-colors">
               <ImageIcon size={20} />
             </button>
           </div>
           
           <button 
             onClick={handleSendMessage}
             disabled={isSending || !msg.trim()}
             className={`p-3.5 rounded-full flex items-center justify-center transition-all shrink-0 shadow-sm
                ${msg.trim() && !isSending ? 'bg-[#37A47C] text-white hover:bg-[#1B4332]' : 'bg-[#E2F1EC] text-[#37A47C]/50'}`}>
             {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className={msg.trim() ? "ml-0.5" : ""} />}
           </button>
           
         </div>
       </div>
      
    </div>
  );
}

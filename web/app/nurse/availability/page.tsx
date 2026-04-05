'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock, Trash2, Save, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { availabilityAPI, authAPI } from '@/lib/api-client';

export default function NurseAvailability() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [newSlot, setNewSlot] = useState({ start: '', end: '' });
  const [showAddSlot, setShowAddSlot] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setIsLoading(true);
        // Check auth first
        const authResponse = await authAPI.getProfile();
        if (!authResponse.data) {
          router.push('/login');
          return;
        }

        const response = await availabilityAPI.getSchedule();
        if (response.data && Array.isArray(response.data)) {
          setSlots(response.data);
        } else if (response.success === false) {
          setSlots([]);
        }
      } catch (err) {
        console.error('Failed to fetch schedule:', err);
        setSlots([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedule();
  }, [router]);

  const handleAddSlot = async () => {
    if (!newSlot.start || !newSlot.end) return;

    try {
      setIsSaving(true);
      const response = await availabilityAPI.addSlot(newSlot.start, newSlot.end);
      if (response.success || response.data) {
        setSlots([...slots, response.data || { id: Date.now().toString(), start: newSlot.start, end: newSlot.end, status: 'available' }]);
        setNewSlot({ start: '', end: '' });
        setShowAddSlot(false);
      }
    } catch (err) {
      console.error('Failed to add slot:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleRemoveSlot = async (slotId: string) => {
    try {
      await availabilityAPI.removeSlot(slotId);
      setSlots(slots.filter(s => s.id !== slotId));
    } catch (err) {
      console.error('Failed to remove slot:', err);
    }
  };

  const handleSaveChanges = async () => {
    try {
      setIsSaving(true);
      await availabilityAPI.updateSchedule(slots);
    } catch (err) {
      console.error('Failed to save schedule:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const monthName = selectedDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

  return (
    <div className="px-6 py-8 pb-24 md:pb-8 max-w-3xl mx-auto w-full min-h-screen flex flex-col bg-[#FBF9F6]">
      <header className="mb-8">
        <h1 className="font-serif text-2xl font-bold text-[#1B4332]">Jadwal Saya</h1>
        <p className="text-sm text-slate-500 font-light mt-1">Atur ketersediaan waktu Anda untuk menerima booking.</p>
      </header>

       {/* Calendar Header Mockup */}
       <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 mb-6">
         <div className="flex items-center justify-between mb-6">
           <h2 className="font-bold text-[#1B4332]">{monthName}</h2>
           <div className="flex gap-2">
             <button 
               onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
               className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-[#37A47C] transition-colors"
             >
               <ChevronLeft size={20}/>
             </button>
             <button 
               onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
               className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-[#37A47C] transition-colors"
             >
               <ChevronRight size={20}/>
             </button>
           </div>
         </div>

         <div className="grid grid-cols-7 gap-2 text-center mb-4">
           {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => (
             <div key={day} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day}</div>
           ))}
           
           {/* Mock days */}
           {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
             const isSelected = day === selectedDate.getDate() && 
                               selectedDate.getMonth() === new Date().getMonth();
             return (
               <div 
                 key={day}
                 onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                 className={`p-2 text-sm rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-[#37A47C] text-white font-bold shadow-lg shadow-[#37A47C]/20' : 'text-slate-600 hover:bg-[#E2F1EC] hover:text-[#37A47C]'}`}
               >
                 {day}
               </div>
             );
           })}
         </div>
       </div>

       {/* Time Slots for Selected Day */}
       <div className="flex-1 space-y-4">
         <div className="flex items-center justify-between mb-2 px-1">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
             <Clock size={18} className="text-[#37A47C]" />
             Slot Waktu ({selectedDate.getDate()} {selectedDate.toLocaleDateString('id-ID', { month: 'short' })})
           </h3>
           <button 
             onClick={() => setShowAddSlot(!showAddSlot)}
             className="text-xs font-bold text-[#37A47C] flex items-center gap-1 hover:opacity-80 transition-opacity"
           >
             <Plus size={14}/> Tambah Slot
           </button>
         </div>

         {showAddSlot && (
           <div className="bg-white p-5 rounded-3xl border border-slate-100 space-y-3">
             <div className="grid grid-cols-2 gap-3">
               <div>
                 <label className="block text-xs font-bold text-slate-500 mb-1">Jam Mulai</label>
                 <Input 
                   type="time"
                   value={newSlot.start}
                   onChange={(e) => setNewSlot({ ...newSlot, start: e.target.value })}
                 />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-500 mb-1">Jam Selesai</label>
                 <Input 
                   type="time"
                   value={newSlot.end}
                   onChange={(e) => setNewSlot({ ...newSlot, end: e.target.value })}
                 />
               </div>
             </div>
             <div className="flex gap-2">
               <Button 
                 onClick={handleAddSlot}
                 disabled={isSaving || !newSlot.start || !newSlot.end}
                 className="flex-1 bg-[#37A47C] hover:bg-[#1B4332] disabled:opacity-50"
               >
                 {isSaving ? <Loader2 size={16} className="animate-spin mr-1" /> : <Plus size={16} className="mr-1" />}
                 Tambah
               </Button>
               <Button 
                 onClick={() => setShowAddSlot(false)}
                 variant="ghost"
                 className="flex-1"
               >
                 Batal
               </Button>
             </div>
           </div>
         )}

         {isLoading ? (
           <div className="flex justify-center py-8">
             <Loader2 size={32} className="animate-spin text-[#37A47C]" />
           </div>
         ) : slots.length === 0 ? (
           <div className="text-center py-8 text-slate-500">
             <Clock size={40} className="mx-auto mb-2 opacity-30" />
             <p className="text-sm">Tidak ada slot waktu. Tambahkan slot untuk mulai menerima booking.</p>
           </div>
         ) : (
           slots.map(slot => (
             <div key={slot.id} className="bg-white p-5 rounded-3xl border border-slate-100 flex items-center justify-between group">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-[#E2F1EC] text-[#37A47C] rounded-2xl flex items-center justify-center">
                   <Clock size={20} />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-[#1B4332]">{slot.start} - {slot.end}</p>
                   <p className="text-[10px] text-[#37A47C] font-bold uppercase tracking-wider">Tersedia</p>
                 </div>
               </div>
               <button 
                 onClick={() => handleRemoveSlot(slot.id)}
                 className="p-2 text-slate-300 hover:text-red-500 transition-colors"
               >
                 <Trash2 size={18} />
               </button>
             </div>
           ))
         )}
       </div>

       <div className="mt-8">
         <Button 
           onClick={handleSaveChanges}
           disabled={isSaving}
           className="w-full h-14 justify-center bg-[#37A47C] hover:bg-[#1B4332] rounded-2xl shadow-lg shadow-[#37A47C]/20 disabled:opacity-50"
         >
           {isSaving ? <Loader2 size={20} className="animate-spin mr-2" /> : <Save size={20} className="mr-2" />}
           {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
         </Button>
       </div>
    </div>
  );
}

export function Loader() {
  return (
    <div className="bg-[#FBF9F6] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#37A47C]/20 border-t-[#37A47C] rounded-full animate-spin"></div>
        <p className="text-slate-600 font-medium">Memuat data...</p>
      </div>
    </div>
  );
}

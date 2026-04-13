export default function Loading() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-[#1E2A3A] border-t-[#00D4FF] animate-spin" />
        <p className="text-[#475569] text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}

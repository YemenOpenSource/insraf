export default function Loading() {
  return (
    <div className="max-h-min min-w-full p-2 sm:p-4">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-center w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1 items-center justify-center">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function NotFound() {
  return (
    <div className="min-h-screen h-fit bg-zinc-950 flex items-center justify-center px-6 py-12 overflow-hidden">
      <div className="max-w-lg mx-auto text-center space-y-4">
        
        <h1 className="text-[180px] md:text-[220px] font-black text-transparent bg-clip-text bg-linear-to-br from-green-200 via-green-500 to-green-900 leading-none tracking-tighter select-none">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-semibold text-white -mt-7.5 mb-6">
          Page Not Found
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-sm mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300 active:scale-95 text-lg flex items-center justify-center gap-2"
          >
            ← Back to Homepage
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-2xl hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300 active:scale-95 text-lg"
          >
            Go Back
          </button>
        </div>

        <div className="mt-16 text-sm text-zinc-500">
          Looking for something else? 
          <div className="flex justify-center gap-6 mt-4">
            <a href="/" className="hover:text-green-400 transition-colors">Dashboard</a>
            <a href="/timeline" className="hover:text-green-400 transition-colors">Timeline</a>
            <a href="/stats" className="hover:text-green-400 transition-colors">stats</a>
          </div>
        </div>
      </div>
    </div>
  );
}
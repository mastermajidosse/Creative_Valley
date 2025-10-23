import { Waves } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Waves className="w-10 h-10 text-primary" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-primary uppercase tracking-tight">Creative</span>
              <span className="text-xl font-bold text-primary uppercase tracking-tight">Valley</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-8 py-2.5 text-gray-600 hover:text-gray-900 font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-all">
              Log in
            </button>
            <button className="px-8 py-2.5 bg-primary hover:bg-primary-700 text-white font-medium rounded-full transition-all shadow-sm hover:shadow-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

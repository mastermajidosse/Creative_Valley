import { Waves, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Waves className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-xl font-bold text-primary uppercase tracking-tight">Creative</span>
              <span className="text-base sm:text-xl font-bold text-primary uppercase tracking-tight">Valley</span>
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button className="px-6 lg:px-8 py-2.5 text-gray-600 hover:text-gray-900 font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-all text-sm lg:text-base">
              Log in
            </button>
            <button className="px-6 lg:px-8 py-2.5 bg-primary hover:bg-primary-700 text-white font-medium rounded-full transition-all shadow-sm hover:shadow-md text-sm lg:text-base">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <button className="w-full px-6 py-2.5 text-gray-600 hover:text-gray-900 font-medium rounded-full border border-gray-300 hover:border-gray-400 transition-all">
                Log in
              </button>
              <button className="w-full px-6 py-2.5 bg-primary hover:bg-primary-700 text-white font-medium rounded-full transition-all shadow-sm hover:shadow-md">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

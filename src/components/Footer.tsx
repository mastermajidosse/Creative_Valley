import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={2.5} />
              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">Creative</span>
                <span className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">Valley</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">
              Creating personalized spaces with custom fabric designs.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-xs sm:text-sm text-center text-gray-400">
          <p>&copy; 2024 Creative Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

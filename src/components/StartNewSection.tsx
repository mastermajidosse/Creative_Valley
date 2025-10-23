import { ShoppingBag, Shirt, Coffee, Image, Wand2, Upload } from 'lucide-react';

export default function StartNewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start New
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Blue Card - Choose */}
          <div className="bg-primary rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">1. Choose</h3>
              <p className="text-primary-100 mb-12 text-lg">
                Explore and pick from: Whether it's fashion, lifestyle, or accessories, there's always a perfect match for everyone. Select from hundreds of premium items like t-shirts, bags, or mugs.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <ShoppingBag className="w-12 h-12 text-gray-800 mb-3" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-gray-800">tote bags</span>
                </div>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Shirt className="w-12 h-12 text-gray-800 mb-3" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-gray-800">T-shirts</span>
                </div>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <Coffee className="w-12 h-12 text-gray-800 mb-3" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-gray-800">Mugs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Green Card - Design */}
          <div className="bg-lime-400 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">2. Design</h3>
              <p className="text-gray-800 mb-12 text-lg">
                Choose what you love! Whether it's fashion, lifestyle, or accessories, Creative Valley offers hundreds of premium items ready to personalize.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="border-4 border-primary rounded-2xl p-8 relative">
                  <Shirt className="w-24 h-24 text-gray-800 mx-auto mb-4" strokeWidth={1.5} />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <span className="text-xs">↻</span>
                    </button>
                    <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <span className="text-xs">↺</span>
                    </button>
                  </div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                    <button className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow">
                      <Image className="w-6 h-6 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow">
                      <Wand2 className="w-6 h-6 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow">
                      <Upload className="w-6 h-6 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center transition-all shadow-sm hover:shadow">
                      <span className="text-gray-700 font-bold">Aa</span>
                    </button>
                  </div>
                  <p className="text-center text-gray-600 font-medium mt-4">T-shirts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

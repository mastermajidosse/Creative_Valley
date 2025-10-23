export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Decorative waves - left side (blue) */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 opacity-90">
        <svg viewBox="0 0 200 800" className="h-full w-full" preserveAspectRatio="none">
          <path d="M0,0 Q50,40 0,80 L0,0 Z" fill="#294bb4" opacity="0.8"/>
          <path d="M0,80 Q50,120 0,160 L0,80 Z" fill="white" opacity="0.9"/>
          <path d="M0,160 Q50,200 0,240 L0,160 Z" fill="#294bb4" opacity="0.8"/>
          <path d="M0,240 Q50,280 0,320 L0,240 Z" fill="white" opacity="0.9"/>
          <path d="M0,320 Q50,360 0,400 L0,320 Z" fill="#294bb4" opacity="0.8"/>
          <path d="M0,400 Q50,440 0,480 L0,400 Z" fill="white" opacity="0.9"/>
          <path d="M0,480 Q50,520 0,560 L0,480 Z" fill="#294bb4" opacity="0.8"/>
          <path d="M0,560 Q50,600 0,640 L0,560 Z" fill="white" opacity="0.9"/>
          <path d="M0,640 Q50,680 0,720 L0,640 Z" fill="#294bb4" opacity="0.8"/>
          <path d="M0,720 Q50,760 0,800 L0,720 Z" fill="white" opacity="0.9"/>
        </svg>
      </div>

      {/* Decorative waves - right side (green) */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 opacity-90">
        <svg viewBox="0 0 200 800" className="h-full w-full" preserveAspectRatio="none">
          <path d="M200,0 Q150,40 200,80 L200,0 Z" fill="#b4d334" opacity="0.8"/>
          <path d="M200,80 Q150,120 200,160 L200,80 Z" fill="white" opacity="0.9"/>
          <path d="M200,160 Q150,200 200,240 L200,160 Z" fill="#b4d334" opacity="0.8"/>
          <path d="M200,240 Q150,280 200,320 L200,240 Z" fill="white" opacity="0.9"/>
          <path d="M200,320 Q150,360 200,400 L200,320 Z" fill="#b4d334" opacity="0.8"/>
          <path d="M200,400 Q150,440 200,480 L200,400 Z" fill="white" opacity="0.9"/>
          <path d="M200,480 Q150,520 200,560 L200,480 Z" fill="#b4d334" opacity="0.8"/>
          <path d="M200,560 Q150,600 200,640 L200,560 Z" fill="white" opacity="0.9"/>
          <path d="M200,640 Q150,680 200,720 L200,640 Z" fill="#b4d334" opacity="0.8"/>
          <path d="M200,720 Q150,760 200,800 L200,720 Z" fill="white" opacity="0.9"/>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Welcome to Creative Valley
        </h1>
        <div className="space-y-1 sm:space-y-2 mb-8 sm:mb-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
            Start designing your personalized pieces today.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
            Every fabric has a story
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
            let's create yours.
          </p>
        </div>
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-primary hover:bg-primary-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base">
          Start New
        </button>
      </div>
    </section>
  );
}

import { Users, ThumbsUp, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Rectangle 2226.png"
                alt="Fabric design workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative fabric samples */}
            <div className="absolute -right-8 top-1/4 w-32 h-48 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-xl transform rotate-12"></div>
            <div className="absolute -right-4 bottom-1/4 w-24 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-xl transform -rotate-6"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-8">
              <p className="text-primary font-semibold text-lg mb-2">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Every Fabric Tells Your Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At <span className="text-primary font-semibold">Creative Valley</span>, we specialize in custom textile design that brings your vision to life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From custom fabric patterns to bags and tote bags, our mission is to deliver top-quality materials, premium prints, and creative personalization to express your unique style effortlessly.
              </p>
              <p className="text-gray-900 font-semibold mb-6">
                Whether you're an individual looking to express yourself or a business wanting unique branded items, we make it simple, fun, and fast.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
              <div className="bg-lime-400 rounded-2xl p-6 text-center shadow-lg">
                <ThumbsUp className="w-8 h-8 text-gray-900 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-sm text-gray-900 font-medium">Top Brand</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">11+</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

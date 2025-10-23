import { useRef, useState, useEffect } from 'react';

export default function ChooseCustomizeSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const products = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Custom T-Shirts'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8251046/pexels-photo-8251046.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Tote Bags'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/7679862/pexels-photo-7679862.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Hoodies'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/5624018/pexels-photo-5624018.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Mugs'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cushions'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3755913/pexels-photo-3755913.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Canvas Prints'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Phone Cases'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Stickers'
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose & Customize
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With top-quality products and brands, pick the perfect items for your personal style or business. Create your unique products in minutes!
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 group"
                style={{ userSelect: 'none' }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <h3 className="text-white text-2xl font-bold p-6">
                      {product.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">Drag to explore more products</p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

import { Truck, Award, Headphones } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: 'Fast local',
      description: 'Delivered quickly and reliably anywhere'
    },
    {
      icon: Award,
      title: 'Top Quality',
      description: 'Top Quality fabrics & prints because your design deserves the best'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Instant help whenever you need it no matter the hour'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 shadow-lg">
                <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

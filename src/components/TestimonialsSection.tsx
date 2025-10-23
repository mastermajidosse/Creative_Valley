import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Creative Valley transformed my business! The quality of their custom tote bags exceeded my expectations. My customers love them and keep coming back for more.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Fashion Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The design process was incredibly smooth and intuitive. I created unique t-shirts for my brand in minutes. The print quality is outstanding and the delivery was fast!'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'I ordered custom merchandise for our corporate event and everyone was impressed. The attention to detail and customer service was phenomenal. Highly recommend!'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Artist',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'As an artist, I need my designs to look perfect. Creative Valley delivers every time. The colors are vibrant, the fabric quality is premium, and the process is hassle-free.'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'We use Creative Valley for all our promotional materials. The turnaround time is incredible and the products always look professional. Our go-to for custom merchandise!'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Starting my merchandise line was a breeze with Creative Valley. The platform is user-friendly, the quality is top-notch, and the support team is always helpful.'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our satisfied customers about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

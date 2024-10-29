import React from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <PageHeader
          title="Get in Touch"
          subtitle="Let's bring your vision to life"
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                details: 'hello@demmynate.com',
                description: 'We'll respond within 24 hours',
              },
              {
                icon: Phone,
                title: 'Call Us',
                details: '+1 (555) 123-4567',
                description: 'Mon-Fri from 9am to 6pm',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                details: '123 Design Street',
                description: 'San Francisco, CA 94103',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                details: 'Mon - Fri: 9am - 6pm',
                description: 'Weekend: By appointment',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-coral-50 rounded-lg">
                    <item.icon className="h-6 w-6 text-coral-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-200"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors duration-200"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="aspect-w-16 aspect-h-7 rounded-xl overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1485536407223"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
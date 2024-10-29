import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-coral-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Crafting Visual
                <span className="text-coral-600"> Experiences </span>
                That Captivate
              </h1>
              <p className="text-xl text-gray-600">
                Transforming ideas into stunning designs that leave lasting impressions.
                We specialize in graphic design, UI/UX, and branding solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors duration-200"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-coral-600 text-coral-600 rounded-lg hover:bg-coral-50 transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Design Showcase"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">Some of our proudest creations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={`https://images.unsplash.com/photo-156107079${item}-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={`Project ${item}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Project Title</h3>
                    <p className="text-gray-200">Branding & Identity</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Love</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "DemmyNate Designs transformed our brand identity completely. Their attention to detail and creative approach exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <img
                    src={`https://images.unsplash.com/photo-156107079${item}-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80`}
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">John Smith</h4>
                    <p className="text-gray-600">CEO, Tech Corp</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
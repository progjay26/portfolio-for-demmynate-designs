import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <PageHeader
            title="About DemmyNate"
            subtitle="Passionate about creating designs that make a difference"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Design Studio"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600">
                Founded in 2020, DemmyNate Designs has grown from a passionate solo venture into a creative powerhouse. We believe in the power of design to transform businesses and create meaningful connections with audiences.
              </p>
              <p className="text-gray-600">
                Our approach combines creative innovation with strategic thinking, ensuring every project not only looks exceptional but also delivers results. We're more than just designers – we're your partners in visual success.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { number: '150+', label: 'Projects Completed' },
                  { number: '50+', label: 'Happy Clients' },
                  { number: '10+', label: 'Design Awards' },
                  { number: '3+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-coral-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every pixel and detail.',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working together to bring your vision to life.',
              },
              {
                icon: Clock,
                title: 'Timeliness',
                description: 'Delivering quality work within agreed timelines.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Pushing boundaries with creative solutions.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-coral-50 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The creative minds behind DemmyNate</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'UI/UX Designer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Emma Davis',
                role: 'Brand Strategist',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-coral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something extraordinary for your brand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors duration-200 text-lg font-medium"
          >
            Start a Project
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
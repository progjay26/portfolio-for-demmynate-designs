import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Layout, Layers, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visuals that communicate your message effectively.',
    features: [
      'Logo & Brand Identity',
      'Marketing Materials',
      'Social Media Graphics',
      'Print Design',
    ],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that enhance user experience and engagement.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Mobile App Design',
    ],
  },
  {
    icon: Layers,
    title: 'Branding',
    description: 'Comprehensive brand strategies that make lasting impressions.',
    features: [
      'Brand Strategy',
      'Visual Identity',
      'Brand Guidelines',
      'Brand Collateral',
    ],
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that drive results.',
    features: [
      'Website Design',
      'Landing Pages',
      'E-commerce Design',
      'Website Redesign',
    ],
  },
];

const Services = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <PageHeader
            title="Our Services"
            subtitle="Elevate your brand with our comprehensive design solutions"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className="h-12 w-12 text-coral-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-coral-600 hover:text-coral-700 font-medium"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              How we bring your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description:
                  'We learn about your business, goals, and target audience.',
              },
              {
                number: '02',
                title: 'Strategy',
                description:
                  'We develop a tailored plan to achieve your objectives.',
              },
              {
                number: '03',
                title: 'Design',
                description:
                  'We create stunning visuals that align with your brand.',
              },
              {
                number: '04',
                title: 'Delivery',
                description:
                  'We refine and deliver the final assets for your success.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block">
                  <span className="text-5xl font-bold text-coral-600">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together. Get in touch with us today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-coral-600 text-white rounded-lg hover:bg-coral-700 transition-colors duration-200 text-lg font-medium"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
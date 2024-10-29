import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Dribbble, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-coral-500" />
              <span className="font-bold text-xl text-white">DemmyNate</span>
            </Link>
            <p className="text-gray-400">
              Crafting visual experiences that captivate and inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-coral-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Graphic Design',
                'UI/UX Design',
                'Branding',
                'Web Design',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-coral-500 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Dribbble, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-coral-500 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DemmyNate Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
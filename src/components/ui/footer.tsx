import React from 'react';
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Linkedin,
  
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/maa-logo.png';
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'DGCA Pilot Training',
    'Aerial Surveys & Mapping',
    'Agriculture Spraying',
    'Infrastructure Inspection',
    'Aerial Photography',
    'Surveillance Solutions'
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/maa_rpto/?igsh=MXd1cHJrOHZnOHR4Yg%3D%3D#', label: 'Instagram' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/modha-aero-academy-760736374?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile', label: 'LinkedIn' }
    
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card border-t border-border/20">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="Modha Aero Academy" 
                  className="h-10 w-auto"
                />
                <span className="font-orbitron font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                  Modha Aero Academy
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your dream our wings. Leading the future of aerospace with cutting-edge 
                drone technology training and professional UAV services.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-lg glass border border-border/20 hover:border-primary/30 transition-all duration-300 hover-lift group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-orbitron font-semibold text-foreground mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-orbitron font-semibold text-foreground mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="font-orbitron font-semibold text-foreground mb-6">
                Stay Connected
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    maa.rpto@gmail.com
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <div>+91 8143552975</div>
                    <div>+91 6304348889</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Thrissur, Kerala, India
                  </span>
                </div>
              </div>

              {/* Newsletter */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Modha Aero Academy. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6 text-sm">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="sm"
          className="rounded-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant glow-primary"
          onClick={() => scrollToSection('#home')}
        >
          <FaArrowUp className="w-4 h-4" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/maa-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#team', label: 'Team' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass backdrop-blur-xl border-b border-border/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Modha Aero Academy" 
                  className="h-10 w-auto"
                />
                {/* <div className="absolute inset-0 animate-pulse-glow opacity-30"></div> */}
              </div>
              <div className="hidden sm:block">
                <span className="font-orbitron font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                  Modha Aero Academy
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              {/* <Button 
                variant="outline" 
                className="tech-border bg-transparent hover:bg-primary/10 border-primary/30 text-primary"
                onClick={() => scrollToSection('#contact')}
              >
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-orbitron font-semibold text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-3"
                onClick={() => scrollToSection('#contact')}
              >
                <Plane className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navigation;
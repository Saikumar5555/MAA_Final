import React, { useEffect, useRef } from 'react';
import { ArrowRight, Plane, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/home.jpg';
import { PiDrone } from "react-icons/pi";

const FloatingParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      
      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 1000);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div ref={particlesRef} className="particles"></div>;
};

const FloatingDrones = () => {
  const drones = [
    { delay: '0s', top: '20%', left: '10%' },
    { delay: '2s', top: '30%', right: '15%' },
    { delay: '4s', bottom: '25%', left: '20%' },
    { delay: '1s', top: '50%', right: '25%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drones.map((drone, index) => (
        <div
          key={index}
          className="absolute text-primary-glow/30 text-2xl animate-drone-float"
          style={{
            ...drone,
            animationDelay: drone.delay,
          }}
        >
          <PiDrone className="w-8 h-8" />
        </div>
      ))}
    </div>
  );
};

const TechScanLine = () => (
  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-tech-scan opacity-30"></div>
);

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Futuristic Drone Academy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30"></div>
      </div>

      {/* Floating Effects */}
      <FloatingParticles />
      <FloatingDrones />
      <TechScanLine />

      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 hex-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Title */}
        <div className="animate-slide-in-tech">
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modha Aero
            </span>
            {" "}
            {/* <br /> */}
            <span className="text-foreground">Academy</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-slide-in-tech" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
            Your Dream <span className="text-secondary font-semibold">Our Wings</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Leading the future of aerospace with cutting-edge drone technology training, 
            DGCA certification, and professional UAV services.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-slide-in-tech flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 hover-lift glow-primary"
            onClick={() => scrollToSection('#services')}
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="tech-border bg-transparent hover:text-primary hover:bg-primary/10 border-primary/30 text-primary font-semibold px-8 py-4 hover-lift"
            onClick={() => scrollToSection('#contact')}
          >
            <Globe className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>

        {/* Stats Grid */}
        {/* <div className="animate-slide-in-tech grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
          {[
            { number: '500+', label: 'Pilots Trained' },
            { number: '50+', label: 'Projects Completed' },
            { number: '10+', label: 'Years Experience' },
            { number: '100%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
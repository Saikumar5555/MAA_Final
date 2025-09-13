import React from 'react';
import { 
  Plane, 
  Video, 
  MapPin, 
  Sprout,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PiDrone } from "react-icons/pi";

const whatWeDo = [
  {
    icon: PiDrone,
    title: 'DGCA Certified Drone Pilot Licence',
    description: 'A DGCA certified drone pilot license in India allows individuals to legally operate drones for commercial or professional purposes.',
    color: 'primary'
  },
  {
    icon: Video,
    title: 'Surveillance',
    description: 'Using drones equipped with cameras and sensors to observe and collect real-time data for security and monitoring purposes.',
    color: 'secondary'
  },
  {
    icon: MapPin,
    title: 'Mapping',
    description: 'Using drones to capture aerial imagery and data to create detailed maps or 3D models for various industries.',
    color: 'accent'
  },
  {
    icon: Sprout,
    title: 'Agriculture Spraying',
    description: 'Innovative and efficient method of applying pesticides, herbicides, and fertilizers to crops using drones.',
    color: 'primary'
  }
];

const WhatWeDo = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-muted/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              What We
            </span>
            <br />
            <span className="text-foreground">Do</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive drone solutions for various industries and applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatWeDo.map((service, index) => (
            <Card 
              key={index}
              className="group glass border-border/20 hover:border-primary/30 transition-all duration-500 hover-lift overflow-hidden cursor-pointer"
              onClick={() => scrollToSection('#services')}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-${service.color}/10 group-hover:bg-gradient-${service.color}/20 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                </div>
                <CardTitle className="font-orbitron text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 text-center">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Action */}
                {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-primary border-primary/30 hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div> */}

                {/* Tech Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 glow-primary"
            onClick={() => scrollToSection('#services')}
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
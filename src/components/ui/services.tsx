import React from 'react';
import { 
  Plane, 
  Camera, 
  MapPin, 
  Sprout, 
  Building, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PiDrone } from "react-icons/pi";

import pilotTraining from '@/assets/pilot-training.jpg';
import aerialMapping from '@/assets/aerial-mapping.png';
import agricultureSpraying from '@/assets/agricultural-spraying.jpg';
import infrastructureInspection from '@/assets/infrastructure-inspection.jpg';
import aerialPhotography from '@/assets/aerial-photography.jpg';
import Survelliance from '@/assets/land-surveying.jpg';

const services = [
  {
    icon: PiDrone,
    title: 'DGCA Certified Drone Pilot License',
    description: 'Comprehensive training program for professional drone pilots with official DGCA certification.',
    image: pilotTraining,
    features: ['Theoretical Knowledge', 'Practical Flight Training', 'DGCA Exam Preparation', 'Certificate Issuance'],
    color: 'primary'
  },
  {
    icon: MapPin,
    title: 'Aerial Surveys & Mapping',
    description: 'Advanced aerial mapping and surveying solutions for construction, mining, and urban planning.',
    image: aerialMapping,
    features: ['3D Terrain Mapping', 'Topographic Surveys', 'GIS Integration', 'Data Analytics'],
    color: 'secondary'
  },
  {
    icon: Sprout,
    title: 'Agriculture Spraying',
    description: 'Precision agriculture solutions with drone spraying technology for enhanced crop productivity.',
    image: agricultureSpraying,
    features: ['Precision Spraying', 'Crop Monitoring', 'Pest Control', 'Yield Optimization'],
    color: 'accent'
  },
  {
    icon: Building,
    title: 'Infrastructure Inspection',
    description: 'Safe and efficient inspection of bridges, towers, and industrial infrastructure using drones.',
    image: infrastructureInspection,
    features: ['Bridge Inspection', 'Tower Assessment', 'Safety Monitoring', 'Damage Detection'],
    color: 'primary'
  },
  {
    icon: Camera,
    title: 'Aerial Photography',
    description: 'Professional aerial photography and videography services for real estate and commercial use.',
    image: aerialPhotography,
    features: ['Real Estate', 'Event Coverage', 'Commercial Photography', '4K Video Production'],
    color: 'secondary'
  },
  {
    icon: Zap,
    title: 'Surveillance Solutions',
    description: 'Advanced surveillance and monitoring services using cutting-edge drone technology.',
    image: Survelliance,
    features: ['Security Monitoring', 'Real-time Data', 'Perimeter Surveillance', 'Emergency Response'],
    color: 'accent'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <Card className="group glass border-border/20 hover:border-primary/30 transition-all duration-500 hover-lift overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent"></div>
        
        {/* Icon */}
        {/* <div className="absolute top-4 left-4">
          <div className={`p-3 rounded-xl glass border border-${service.color}/30 group-hover:shadow-${service.color} transition-all duration-300`}>
            <service.icon className={`w-6 h-6 text-${service.color}`} />
          </div>
        </div> */}

        {/* Tech Scan Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="font-orbitron text-xl group-hover:text-primary transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        {/* <Button 
          variant="outline" 
          className="w-full tech-border bg-transparent hover:bg-primary/10 border-primary/30 text-primary group-hover:glow-primary transition-all duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button> */}
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced Drone
            </span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From professional pilot training to cutting-edge aerial services, we provide comprehensive 
            drone solutions that push the boundaries of what's possible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-slide-in-tech"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 border border-border/20 max-w-2xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold mb-4">
              Ready to Take Flight?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of certified pilots and discover the future of aerial technology with our expert training programs.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 glow-primary"
            >
              <Plane className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { 
  Users, 
  Target, 
  Settings, 
  CheckSquare,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import liveFlying from '@/assets/live-flying.jpeg';
import industryCollaboration from '@/assets/industry-collaboration.jpeg';
import handsOnFlying from '@/assets/hands-on-flying.jpeg';
import teamTroubleshooting from '@/assets/team-troubleshooting.jpeg';
import droneTesting from '@/assets/drone-testing.jpeg';
import preFlightChecks from '@/assets/pre-flight-checks.jpeg';

const portfolioItems = [
  {
    title: 'Live Flying Session',
    description: 'Participated in field training with live drone flying sessions for agricultural spraying and surveying.',
    image: liveFlying,
    icon: Users
  },
  {
    title: 'Industry Collaboration',
    description: 'Collaborated with professionals on agricultural drone deployment and testing in field conditions.',
    image: industryCollaboration,
    icon: Target
  },
  {
    title: 'Hands-on Flying',
    description: 'Gained practical experience piloting drones in manual and GPS-assisted modes under expert guidance.',
    image: handsOnFlying,
    icon: Settings
  },
  {
    title: 'Team-Based Troubleshooting',
    description: 'Worked closely with peers and instructors to identify and fix technical issues during drone operation.',
    image: teamTroubleshooting,
    icon: Users
  },
  {
    title: 'Drone Testing',
    description: 'Performed functional and stability tests on drone models to validate flight accuracy and reliability.',
    image: droneTesting,
    icon: Settings
  },
  {
    title: 'Pre-Flight Checks',
    description: 'Followed standard drone checklists for battery, propeller inspection, GPS lock, and safety protocols.',
    image: preFlightChecks,
    icon: CheckSquare
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-secondary/20 mb-6">
            <Target className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">Portfolio</span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Training
            </span>
            <br />
            <span className="text-foreground">Excellence</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our drone training journey through these highlights from our hands-on 
            sessions and collaborative projects that shape future aviation professionals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group glass border-border/20 hover:border-secondary/30 transition-all duration-500 hover-lift overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
                
                {/* Icon Overlay */}
                {/* <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-lg glass border border-secondary/30 group-hover:shadow-secondary transition-all duration-300">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                </div> */}

                {/* Hover Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary"
                    size="sm"
                    className="bg-secondary/90 hover:bg-secondary text-secondary-foreground font-medium"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div> */}

                {/* Tech Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="font-orbitron text-xl group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 border border-border/20 max-w-2xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold mb-4">
              Join Our Training Program
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience hands-on learning with our expert instructors and become part of our success stories.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8 py-4 glow-secondary"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Training Today
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
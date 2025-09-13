import React from 'react';
import { 
  Star, 
  Award, 
  Users,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import teamLalitha from '@/assets/team1.jpg';
import teamChaitanya from '@/assets/team2.jpg';
import teamDinesh from '@/assets/team3.jpg';
import teamManohar from '@/assets/team4.jpg';

const teamMembers = [
  {
    name: 'Lalitha',
    position: 'DRONE PILOT INSTRUCTOR',
    image: teamLalitha,
    specialization: 'Flight Training Expert',
    experience: '8+ Years'
  },
  {
    name: 'Chaitanya',
    position: 'DRONE PILOT INSTRUCTOR',
    image: teamChaitanya,
    specialization: 'Aerial Mapping Specialist',
    experience: '7+ Years'
  },
  {
    name: 'Dinesh',
    position: 'DRONE PILOT INSTRUCTOR',
    image: teamDinesh,
    specialization: 'Infrastructure Inspection',
    experience: '6+ Years'
  },
  {
    name: 'Manohar',
    position: 'DRONE PILOT INSTRUCTOR',
    image: teamManohar,
    specialization: 'Agricultural Spraying Expert',
    experience: '9+ Years'
  }
];

const Team = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-20 bg-muted/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <Users className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Expert
            </span>
            <br />
            <span className="text-foreground">Instructors</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate minds driving Modha Aero Academy forward with years of 
            experience and expertise in drone technology education.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group glass border-border/20 hover:border-accent/30 transition-all duration-500 hover-lift overflow-hidden text-center"
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Experience Badge */}
                  {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="px-3 py-1 rounded-full glass border border-accent/30 text-xs font-medium text-accent">
                      {member.experience}
                    </div>
                  </div> */}
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-accent font-medium text-sm">
                    {member.position}
                  </p>
                  
                  <p className="text-muted-foreground text-sm">
                    {member.specialization}
                  </p>

                  {/* Skills/Certifications */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                        <Award className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">DGCA Certified</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                        <Star className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">Expert Trainer</span>
                    </div>
                  </div>
                </div>

                {/* Tech Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '30+', label: 'Years Combined Experience' },
            { number: '500+', label: 'Students Trained' },
            { number: '100%', label: 'DGCA Certified' },
            { number: '50+', label: 'Projects Completed' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 border border-border/20 max-w-2xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold mb-4">
              Learn from the Best
            </h3>
            <p className="text-muted-foreground mb-6">
              Our certified instructors bring decades of real-world experience to provide 
              you with the most comprehensive drone training available.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold px-8 py-4 glow-accent"
              onClick={() => scrollToSection('#contact')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Meet Our Instructors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
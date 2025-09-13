import React from 'react';
import { 
  CheckCircle, 
  Users, 
  Award, 
  Target, 
  Zap,
  Globe,
  Plane,
  Star
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aboutimg from '@/assets/about-us.jpg'

const About = () => {
  const stats = [
    { number: '500+', label: 'Pilots Trained', icon: Users },
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Success Rate', icon: Star },
  ];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const features = [
    'DGCA Certified Training Programs',
    'State-of-the-Art Equipment',
    'Industry Expert Instructors',
    'Placement Assistance',
    'Hands-on Flight Training',
    'Advanced Simulation Labs',
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-secondary/20 mb-6">
            <Globe className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">About Us</span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Leading Drone
            </span>
            <br />
            <span className="text-foreground">Technology Education</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Shaping the future of drone technology through world-class training and hands-on industry experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                Pioneering Aerospace Excellence
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Modha Aero Academy stands at the forefront of drone technology education, 
                  offering comprehensive training programs that transform aviation enthusiasts 
                  into certified professional pilots.
                </p>
                <p>
                  Our cutting-edge facilities and expert instructors ensure that every student 
                  receives world-class education in unmanned aerial vehicle operations, preparing 
                  them for successful careers in the rapidly expanding drone industry.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="font-orbitron text-xl font-semibold text-foreground mb-4">
                Why Choose Us
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
            onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8 py-4 glow-secondary"
            >
              <Plane className="w-5 h-5 mr-2" />
              Join Our Academy
            </Button>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* {stats.map((stat, index) => (
              <Card 
                key={index}
                className="glass border-border/20 hover:border-primary/30 transition-all duration-500 hover-lift group"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-orbitron text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))} */}
            <img src={aboutimg} className='p-6 sm:p-8 rounded-xl'/>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass border-border/20 hover:border-accent/30 transition-all duration-500 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-accent/10 mr-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To democratize drone technology education and empower the next generation of 
                aviation professionals with cutting-edge skills and knowledge that drive innovation 
                in the aerospace industry.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border/20 hover:border-secondary/30 transition-all duration-500 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-secondary/10 mr-4">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the global leader in drone technology education, setting industry standards 
                and creating a future where unmanned aerial vehicles revolutionize how we work, 
                explore, and connect with our world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
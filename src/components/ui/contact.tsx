import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Zap,
  Globe,
  Clock,
  MessageCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['maa.rpto@gmail.com'],
      color: 'primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8143552975', '+91 6304348889'],
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Room No: C5, Name: Mangifera', 'Agri Business Incubator, KAU', 'Vellanikkara, Thrissur, Kerala, 680656'],
      color: 'accent'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent/20 mb-6">
            <MessageCircle className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Contact Us</span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Ready to Take
            </span>
            <br />
            <span className="text-foreground">Flight?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our expert team to start your drone technology journey. 
            We're here to answer your questions and guide you every step of the way.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-border/20 hover:border-primary/30 transition-all duration-500">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl flex items-center">
                <Send className="w-6 h-6 text-primary mr-3" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="glass bg-transparent border-border/30 focus:border-primary/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="glass bg-transparent border-border/30 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="glass bg-transparent border-border/30 focus:border-primary/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your drone training goals or service requirements..."
                    rows={5}
                    className="glass bg-transparent border-border/30 focus:border-primary/50 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-4 glow-primary"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className={`glass border-border/20 hover:border-${info.color}/30 transition-all duration-500 hover-lift group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-${info.color}/10 group-hover:bg-gradient-${info.color}/20 transition-colors duration-300 flex-shrink-0`}>
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map */}
            <Card className="glass border-border/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6596.663736787899!2d76.28534262273867!3d10.547860281793854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e557332210f5%3A0xf2b2d95eb7fbb6d5!2sKAU%20Agri%20business%20incubator!5e0!3m2!1sen!2sin!4v1757688031126!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Modha Aero Academy Location"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass border-border/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-4">
                Join the Future of Aviation
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to transform your passion for technology into a rewarding career? 
                Start your drone pilot journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button 
                  size="lg"
                  className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8 py-4 glow-secondary"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="tech-border bg-transparent hover:bg-primary/10 border-primary/30 text-primary font-semibold px-8 py-4"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import Navigation from '@/components/ui/navigation';
import Hero from '@/components/ui/hero';
import WhatWeDo from '@/components/ui/what-we-do';
import Services from '@/components/ui/services';
import Portfolio from '@/components/ui/portfolio';
import Team from '@/components/ui/team';
import About from '@/components/ui/about';
import Contact from '@/components/ui/contact';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* <WhatWeDo /> */}
      <Services />
      <Portfolio />
      <Team />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

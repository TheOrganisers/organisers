
import React, { useEffect } from 'react';
import Logo from '@/components/Logo';
import SocialLink from '@/components/SocialLink';
import { cn } from '@/lib/utils';

const Index = () => {
  // Animation on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        el.style.animationDelay = `${index * 0.15}s`;
      }
    });
  }, []);

  return (
    <div className="h-[100dvh] w-full bg-premium-gradient bg-premium-texture flex flex-col items-center justify-center relative px-4 sm:px-8 overflow-hidden">
      {/* Premium floating shapes for visual interest */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-premium-gold/5 blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-premium-gold/5 blur-[120px]" />
      
      {/* Logo centered at the top */}
      <div className="animate-on-mount animate-fade-in">
        <Logo />
      </div>
      
      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
        {/* Headline */}
        <h1 className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-on-mount animate-fade-in",
          "bg-gradient-to-r from-white to-premium-champagne bg-clip-text text-transparent"
        )}>
          Built for the Top 1% of Event Organisers
        </h1>
        
        {/* Description */}
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-on-mount animate-fade-in">
          The Organisers is a curated community and content hub for India's most elite event professionals. Discover insights, inspiration, and interviews from the best in the industry.
        </p>
        
        {/* Social Links - centered on mobile */}
        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center mt-6 animate-on-mount animate-fade-in">
          <SocialLink 
            platform="instagram" 
            url="https://www.instagram.com/theorganisers.in" 
          />
          <SocialLink 
            platform="youtube" 
            url="https://youtube.com/@theorganisersin" 
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

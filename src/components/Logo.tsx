
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-premium-charcoal to-premium-slate flex items-center justify-center border border-white/10">
        <img 
          src="/lovable-uploads/74251ea8-dae4-47ab-8d67-e3d606465364.png"
          alt="The Organizers Logo"
          className="w-10 h-10 object-contain"
        />
      </div>
      <span className="text-xl font-medium tracking-wider text-premium-champagne">
        <span className="text-premium-gold">the</span>organisers
      </span>
    </div>
  );
};

export default Logo;

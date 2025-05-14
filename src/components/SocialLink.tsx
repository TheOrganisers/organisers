
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

type SocialLinkProps = {
  platform: 'instagram' | 'youtube';
  url: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/5 border border-white/10 hover:border-premium-gold/30"
    >
      {platform === 'instagram' && (
        <Instagram size={20} className="text-premium-gold group-hover:scale-110 transition-transform duration-300" />
      )}
      {platform === 'youtube' && (
        <Youtube size={20} className="text-premium-gold group-hover:scale-110 transition-transform duration-300" />
      )}
      <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-premium-champagne transition-colors">
        {platform === 'instagram' ? 'Follow on Instagram' : 'Watch on YouTube'}
      </span>
    </a>
  );
};

export default SocialLink;

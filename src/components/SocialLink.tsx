
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      className={cn(
        "w-full sm:w-auto group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full",
        "transition-all duration-300 hover:bg-white/5 border border-white/10 hover:border-premium-gold/30",
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-premium-gold/5 before:rounded-full",
        "before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500",
        "after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_15px_3px_rgba(230,199,126,0.3)]",
        "after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700"
      )}
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

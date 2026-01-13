
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  badge?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, badge, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-premium-gold text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight leading-tight">
        {title}
      </h2>
      <p className="text-gray-500 max-w-2xl text-lg leading-relaxed mx-auto lg:mx-0">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;

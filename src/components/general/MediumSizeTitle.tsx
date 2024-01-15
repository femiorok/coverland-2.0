import { SectionTitleProps } from '@/interfaces';
import React from 'react';

const MediumSizeTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`text-xl md:text-2xl lg:text-3xl text-black font-black uppercase mb-4 ${className}`}
    >
      {title}
    </h2>
  );
};

export default MediumSizeTitle;

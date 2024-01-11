import { SectionTitleProps } from '@/interfaces';
import React from 'react';

const LargeSizeTitle: React.FC<SectionTitleProps> = ({
  title,
  className = '',
  subtitle,
  isTitleBelow = false,
}) => {
  return (
    <div
      className={`flex ${
        isTitleBelow === true ? 'flex-col-reverse' : 'flex-col'
      } items-center justify-center gap-4`}
    >
      <h1
        className={`text-[#1A1A1A] font-black text-2xl md:text-3xl lg:text-5xl uppercase text-center ${className}`}
      >
        {title}
      </h1>
      {subtitle != '' && (
        <h6 className="text-sm md:text-2xl text-[#343434] font-normal capitalize">
          {subtitle}
        </h6>
      )}
    </div>
  );
};

export default LargeSizeTitle;

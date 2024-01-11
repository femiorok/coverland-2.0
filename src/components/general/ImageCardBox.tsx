import { ImageCardBoxProps } from '@/interfaces';
import React from 'react';
import { Button } from '../ui/button';

const ImageCardBox: React.FC<ImageCardBoxProps> = ({
  title,
  bgImage,
  btnText,
  btnHandler,
}) => {
  return (
    <div
      className="rounded-lg relative overflow-hidden h-[348px] md:h-96 lg:h-[562px] w-full flex flex-col items-stretch justify-end gap-3 lg:flex-1 p-6 md:p-8 bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="tracking-[0.48px] text-white text-xl md:text-2xl font-bold capitalize">
        {title}
      </h2>
      <Button
        className="w-[160px] h-[44px] text-lg bg-white hover:bg-[#1A1A1A] rounded-full border border-transparent text-base font-black text-black hover:text-white tracking-[0.32px] capitalize"
        onClick={btnHandler}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default ImageCardBox;

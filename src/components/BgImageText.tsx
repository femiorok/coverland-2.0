import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

const BackgroundImageWithText = ({
  imageSrc,
  altText,
  children,
}: {
  imageSrc: StaticImageData;
  altText: string;
  children: ReactNode;
}) => {
  return (
    <div className="relative w-full">
      <div className="-z-0">
        <Image
          alt={altText}
          src={imageSrc}
          placeholder="blur"
          quality={75}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {children}
    </div>
  );
};

export default BackgroundImageWithText;

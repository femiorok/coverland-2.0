import { IFrameVideoProps } from '@/interfaces';
import React from 'react';

const YTVideo: React.FC<IFrameVideoProps> = ({ title, url, width, height }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={url}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YTVideo;

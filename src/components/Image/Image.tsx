import { FC } from 'react';
import { ImageProps } from './types';

const Image: FC<ImageProps> = ({ desktopImage, mobileImage, alt, className }) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopImage} />
      <img className={className} src={mobileImage} alt={alt} />
    </picture>
  );
};

export default Image;

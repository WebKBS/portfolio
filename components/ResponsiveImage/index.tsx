import React from 'react';
import { getImageProps, ImageProps, StaticImageData } from 'next/image';

interface IResponsiveImage extends Omit<ImageProps, 'src'> {
  desktop: StaticImageData | string | null;
  mobile: StaticImageData | string | null;
}

const ResponsiveImage = ({
  desktop,
  mobile,
  alt,
  priority = false,
  fill = false,
  quality = 100,
  loading,
  placeholder,
  className,
}: IResponsiveImage) => {
  // 둘 다 없으면 렌더링 불가
  if (!desktop && !mobile) return null;

  const commonProps = {
    alt,
    sizes: '100vw',
    quality,
    priority,
    fill,
    loading,
    placeholder,
  };

  // desktop props
  const desktopProps = desktop ? getImageProps({ ...commonProps, src: desktop }) : null;

  // mobile props
  const mobileProps = mobile ? getImageProps({ ...commonProps, src: mobile }) : null;

  const desktopSrcSet = desktopProps?.props.srcSet;
  const mobileSrcSet = mobileProps?.props.srcSet;
  const imgProps = mobileProps?.props ?? desktopProps?.props;

  return (
    <picture>
      {desktopSrcSet && <source media='(min-width: 1240px)' srcSet={desktopSrcSet} />}

      {mobileSrcSet && <source srcSet={mobileSrcSet} />}

      <img {...imgProps} alt={alt} className={className} srcSet={mobileSrcSet || desktopSrcSet} />
    </picture>
  );
};

export default ResponsiveImage;

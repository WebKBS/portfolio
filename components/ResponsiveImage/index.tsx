import React from "react";
import { getImageProps, ImageProps, StaticImageData } from "next/image";

interface IResponsiveImage extends Omit<ImageProps, "src"> {
  desktop: StaticImageData | string;
  mobile: StaticImageData | string;
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
  const commonProps = {
    alt: alt,
    sizes: "100vw",
    quality: quality,
    priority: priority,
    fill: fill,
    loading,
    placeholder,
  };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...commonProps,
    src: desktop,
  });

  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...commonProps,
    src: mobile,
  });

  return (
    <picture>
      <source media="(min-width: 1240px)" srcSet={desktopSrcSet} />
      <source srcSet={mobileSrcSet} />
      <img
        {...imgProps}
        srcSet={mobileSrcSet}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;

'use client';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import IphoneMockup from '../Mockup/IphoneMockup';
import MacMockup from '../Mockup/MacMockup';
import styles from './ModalCarousel.module.css';
import { PreviewImageType } from '@/types/worksType';
import IconFinger from '@/public/icons/finger.svg';

const ModalCarousel = ({ previewImageData }: { previewImageData: PreviewImageType[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      // console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='mx-auto w-[86%] max-w-[800px]'>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {previewImageData.map((image, index) => (
            <CarouselItem key={index}>
              {image.desktopImage ? <MacMockup src={image.desktopImage} title='' /> : null}
              {image.mobileImage ? <IphoneMockup src={image.mobileImage} title='' /> : null}
            </CarouselItem>
          ))}
        </CarouselContent>
        <Image src={IconFinger} alt='finger icon' priority className={styles.finger} />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='text-muted-foreground py-2 text-center text-sm'>
        {current} / {count}
      </div>
    </div>
  );
};

export default ModalCarousel;

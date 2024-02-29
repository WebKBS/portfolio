"use client";
import { IPreview } from "@/app/works/_components/Preview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import IphoneMockup from "../Mockup/IphoneMockup";
import MacMockup from "../Mockup/MacMockup";

const ModalCarousel = ({
  previewImageData,
}: {
  previewImageData: IPreview[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-[86%] max-w-[800px]">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {previewImageData.map((image, index) => (
            <CarouselItem key={index}>
              <MacMockup src={image.image} title="" />
              <IphoneMockup src={image.mobileImage} title="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>
    </div>
  );
};

export default ModalCarousel;

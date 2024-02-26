import Image from "next/image";

const WorksBanner = ({ image }: { image: string }) => {
  console.log(image);
  return (
    <div className="sticky left-0 top-14 -z-10 h-[400px] w-screen overflow-hidden">
      <Image
        priority
        src={image}
        alt="Works Banner"
        width={1920}
        height={400}
        className="absolute -top-1/2 left-0 object-cover"
      />
    </div>
  );
};

export default WorksBanner;

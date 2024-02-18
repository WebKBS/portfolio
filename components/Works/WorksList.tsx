import { IWorks, works } from "@/works/worksData";
import Image from "next/image";
import Link from "next/link";

const WorksList = () => {
  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">Works</h2>
      <Link href="/works" className="inline-flex ">
        More +
      </Link>
      <ul className="flex">
        {works.map((work: IWorks) => (
          <li key={work.id} className="max-w-60 flex-1 rounded-lg border">
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={work.image}
                alt={work.thumbnail}
                width={300}
                height={300}
                className="absolute left-0 top-0 h-auto w-full object-cover"
              />
            </div>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorksList;

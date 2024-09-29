import { IWorks } from "@/data/works/worksData";

let index = 0;
const worksInit: IWorks[] = [
  {
    published: false,
    id: index++,
    title: "",
    description: "",
    thumbnail: "",
    image: "",
    mobileImage: "",
    bannerImage: "",
    url: "",
    date: "",
    tags: ["", "", ""],
    slug: "",
    body: "",
    contribution: "",
    detailContent: {
      previewImages: [
        {
          desktopImage: "",
          mobileImage: "",
        },
      ],
      description: "",
      insight: "",
      stacks: ["", "", ""],
      functions: [
        {
          function: "",
          description: "",
        },
      ],
    },
  },
];

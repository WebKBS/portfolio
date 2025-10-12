import { IWorks } from "@/types/worksType";
import { roowaWorks } from "@/data/works/roowa";
import { personalProject } from "@/data/works/ personal-project";
import { vstroWorks } from "@/data/works/vstro";

export const works: IWorks[] = [
  ...roowaWorks,
  ...personalProject,
  ...vstroWorks,
];

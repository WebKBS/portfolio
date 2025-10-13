import { IWorks } from "@/types/worksType";
import { roowaWorks } from "@/data/works/roowa";
import { personalProject } from "@/data/works/ personal-project";
import { vstroWorks } from "@/data/works/vstro";
import { dpectrumWorks } from "@/data/works/dpectrum";

export const works: IWorks[] = [
  ...dpectrumWorks,
  ...roowaWorks,
  ...personalProject,
  ...vstroWorks,
];

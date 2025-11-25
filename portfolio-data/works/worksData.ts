import { IWorks } from '@/types/worksType';
import { roowaWorks } from '@/portfolio-data/works/roowa';
import { personalProject } from '@/portfolio-data/works/personal-project';
import { vstroWorks } from '@/portfolio-data/works/vstro';
import { dpectrumWorks } from '@/portfolio-data/works/dpectrum';

export const works: IWorks[] = [...dpectrumWorks, ...roowaWorks, ...personalProject, ...vstroWorks];

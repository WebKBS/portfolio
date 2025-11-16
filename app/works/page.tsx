import WorksBanner from '@/components/Banner/WorksBanner';
import { works } from '@/portfolio-data/works/worksData';
import WorkItem from '@/containers/home/Sections/Works/WorkItem';
import worksBannerImage from '@/public/images/banner/works-banner.png';
import { IWorks } from '@/types/worksType';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
};

const WorksPage = () => {
  let filteredWorks: IWorks[] = [];

  if (process.env.NODE_ENV === 'production') {
    filteredWorks = works.filter((work) => work.published);
  }

  if (process.env.NODE_ENV === 'development') {
    filteredWorks = works;
  }

  return (
    <main className='flex-1'>
      <WorksBanner image={worksBannerImage} title='WORKS' />
      <div className='bg-background'>
        <section className='relative z-[1] mx-auto max-w-screen-lg pt-8 pb-20 lg:max-w-screen-2xl lg:px-6'>
          {/*<PageTitle title='WORKS' />*/}
          <ul className='flex flex-wrap gap-4 px-5 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3 lg:px-0'>
            {filteredWorks.map((work) => (
              <WorkItem key={work.id} work={work} isPortfolio />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default WorksPage;

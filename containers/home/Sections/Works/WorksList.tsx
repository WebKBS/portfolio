import { works } from '@/data/works/worksData';

import Link from 'next/link';
import WorkItem from './WorkItem';
import { isEmpty } from 'lodash';
import { IWorks } from '@/types/worksType';

const SLICE_COUNT = 9;

const WorksList = () => {
  let filterData: IWorks[] = [];

  if (process.env.NODE_ENV === 'development') {
    filterData = works.filter((work) => isEmpty(work.title) === false).slice(0, SLICE_COUNT);
  }

  if (process.env.NODE_ENV === 'production') {
    filterData = works
      .filter((work) => isEmpty(work.title) === false && work.published)
      .slice(0, SLICE_COUNT);
  }

  return (
    <>
      <h2 className='mb-6 text-center text-3xl font-bold'>WORKS</h2>
      <div className='overflow-x-auto'>
        <div className='mx-auto mb-3 flex justify-end text-sm lg:max-w-full'>
          <Link href='/works' className='flex items-center gap-1'>
            More{' '}
            <span className='flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white'>
              {works.length}
            </span>{' '}
            +
          </Link>
        </div>
        <ul className='flex flex-col gap-5 pb-4 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3'>
          {filterData.map((work) => {
            return <WorkItem key={work.id} work={work} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default WorksList;

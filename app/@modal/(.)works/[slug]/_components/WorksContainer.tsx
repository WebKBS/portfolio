'use client';
import styles from '@/app/@modal/(.)works/[slug]/page.module.css';
import { Badge } from '@/components/ui/badge';
import Mockup from '@/components/Mockup/MockupAnimation';
import ButtonAction from '@/app/@modal/(.)works/[slug]/_components/ButtonAction';
import { useEffect, useState } from 'react';
import { useRouterModalToggle } from '@/store/modal-store';
import { useTheme } from 'next-themes';
import useScrollHandler from '@/hooks/useScrollHandler';
import { works } from '@/portfolio-data/works/worksData';
import { notFound } from 'next/navigation';

interface WorksContainerProps {
  slug: string;
}

const WorksContainer = ({ slug }: WorksContainerProps) => {
  const [lightTheme, setLightTheme] = useState(styles.afterShadow);
  const { modalOpen } = useRouterModalToggle();
  const { theme } = useTheme();
  const { scrollRef, topBoxRef } = useScrollHandler();

  useEffect(() => {
    if (theme === 'light') {
      setLightTheme(styles.afterWhiteShadow);
    }
  }, [theme]);

  const data = works.find((work) => work.slug === slug);

  if (process.env.NODE_ENV === 'production' && !data?.published) {
    return notFound();
  }

  return (
    <div
      className={`bg-background absolute top-1/2 left-1/2 z-50 flex h-[90%] w-[90%] flex-col overflow-hidden rounded-xl border-2 shadow-md lg:h-3/4 lg:max-w-7xl ${modalOpen ? styles.active : ''}`}
    >
      <div className={`h-full w-full overflow-y-auto ${lightTheme}`} ref={scrollRef}>
        <div className='py-6'>
          <div
            ref={topBoxRef}
            className={`sticky top-6 left-6 px-6 pb-6 transition-opacity duration-500`}
          >
            <h2 className='mb-2 text-xl font-semibold'>{data?.title}</h2>
            <h3 className='mb-2'>{data?.description}</h3>
            <div className='mb-2 flex gap-2 text-sm'>
              <p>제작기간:</p>
              <p>{data?.date}</p>
            </div>
            <div className='mb-2 text-sm text-green-500'>
              {!data?.url ? (
                <span className='text-red-400'>URL이 제공되지 않습니다.</span>
              ) : (
                <a href={data?.url} target='_blank' rel='noopener noreferrer'>
                  {data?.url}
                </a>
              )}
            </div>
            <div className='mb-2'>
              <ul className='flex flex-wrap gap-2'>
                {data?.tags.map((tech, index) => (
                  <li key={index}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-background relative z-10 w-full pt-4'>{data?.body}</div>
          </div>
          <div className='relative z-10 px-6 py-6'>
            <Mockup
              title={data!.title}
              desktopImage={data!.desktopImage}
              mobileImage={data!.mobileImage}
            />
          </div>
        </div>
      </div>
      <ButtonAction slug={slug} />
    </div>
  );
};

export default WorksContainer;

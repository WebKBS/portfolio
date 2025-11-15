import QrCode from '@/components/QrCode/QrCode';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import LottieClient from '@/components/Lottie/LottieClient';

const MainSection = () => {
  return (
    <section className='relative mx-auto max-w-screen-md px-5 py-24 sm:max-w-xl sm:py-60 lg:max-w-screen-lg lg:px-8'>
      <div className='gap-6 sm:flex sm:justify-center'>
        <div className='flex flex-col justify-between gap-12'>
          <div>
            <h2 className='mb-4 text-center text-3xl leading-normal font-bold sm:text-left md:text-5xl md:leading-snug'>
              BEOM-SU KANG
              <br />
              <span>PORTFOLIO</span>
            </h2>
            <div className='mb-8 flex flex-wrap justify-center gap-2 sm:mb-0 sm:justify-normal'>
              <Link
                href={'https://recodelog.com'}
                className={`${buttonVariants({ variant: 'outline', size: 'sm' })} bg-violet-500/90 text-white`}
                target={'_blank'}
              >
                개인 블로그
              </Link>
              <Link
                href={'/about'}
                className={`${buttonVariants({ variant: 'secondary', size: 'sm' })}`}
              >
                About
              </Link>
              <Link
                href='/works'
                className={`${buttonVariants({ variant: 'secondary', size: 'sm' })}`}
              >
                작업 목록
              </Link>
              <Link
                href={
                  'https://lilac-hare-5d2.notion.site/Frontend-Developer-114e9217c068809795f7ef67f4ce83b9'
                }
                className={`${buttonVariants({ variant: 'secondary', size: 'sm' })}`}
              >
                이력서
              </Link>
            </div>
          </div>
          <QrCode url='https://portfolio-webkbs-projects.vercel.app/' />
        </div>
        <LottieClient />
      </div>
      <div className='absolute bottom-6 left-0 px-5 text-center text-xs break-keep sm:text-left lg:px-8 dark:text-yellow-300'>
        본 사이트는 포트폴리오 용도로 제작되었으며, 어떠한 상업적 목적으로 사용되지 않습니다.
      </div>
    </section>
  );
};

export default MainSection;

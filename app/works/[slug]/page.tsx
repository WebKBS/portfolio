import WorksBanner from '@/components/Banner/WorksBanner';
import { works } from '@/portfolio-data/works/worksData';
import { notFound } from 'next/navigation';
import ContentTitle from '../../../containers/works/ContentTitle';
import FunctionItem from '../../../containers/works/FunctionItem';
import Preview from '../../../containers/works/Preview';
import StackItem from '../../../containers/works/StackItem';
import GalleryButton from '@/components/Buttons/GalleryButton';
import Mockup from '@/components/Mockup/MockupAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const WorksDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = works.find((work) => work.slug === slug);

  if (!data) {
    return notFound();
  }

  if (process.env.NODE_ENV === 'production' && !data.published) {
    return notFound();
  }

  const hasStacks = data.detailContent.stacks && data.detailContent.stacks.length > 0;
  const hasFunctions = data.detailContent.functions && data.detailContent.functions.length > 0;
  const hasTags = data.tags && data.tags.length > 0;
  const hasUrl = !!data.url && data.url !== 'empty';

  return (
    <main className='flex-1'>
      <WorksBanner image={data.bannerImage} title={data.title} />
      <section className='z-[1] mx-auto h-full w-full max-w-screen-2xl px-5 py-6 lg:px-6 lg:py-14'>
        {/*<PageTitle title={portfolio-data.title} />*/}

        {/* Hero / Mockup + CTAs */}
        <div className='mx-auto mb-10 max-w-5xl'>
          <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
            <div>
              <h1 className='text-2xl font-bold sm:text-3xl'>{data.title}</h1>
              <p className='text-muted-foreground mt-1 text-sm'>{data.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              {hasUrl ? (
                <Button asChild>
                  <a href={data.url!} target='_blank' rel='noreferrer'>
                    사이트 방문
                  </a>
                </Button>
              ) : (
                <Button variant='secondary' disabled>
                  배포 준비중
                </Button>
              )}
              <GalleryButton />
            </div>
          </div>
          <div className='bg-card mt-6 rounded-lg border p-4'>
            <Mockup title={data.title} image={data.image} mobileImage={data.mobileImage} />
          </div>
        </div>

        {/* Content Grid */}
        <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-12'>
          {/* Left: Main Content */}
          <div className='lg:col-span-8'>
            <div className='mb-10'>
              <ContentTitle title='프로젝트 소개' />
              <div className='leading-7'>{data.detailContent.description}</div>
            </div>

            {hasFunctions && (
              <div className='mb-10'>
                <ContentTitle title='사용 기능' />
                <ul>
                  {data.detailContent.functions.map((functionData, index) => (
                    <FunctionItem key={index} functionData={functionData} />
                  ))}
                </ul>
              </div>
            )}

            <div className='mb-10'>
              <ContentTitle title='프로젝트 후기' />
              <div className='leading-7'>{data.detailContent.insight}</div>
            </div>
          </div>

          {/* Right: Sticky Sidebar */}
          <aside className='lg:col-span-4'>
            <div className='lg:sticky lg:top-28'>
              <div className='mb-6 rounded-lg border p-5'>
                <h3 className='mb-3 text-lg font-semibold'>프로젝트 정보</h3>
                <div className='mb-2 text-sm'>
                  <span className='text-muted-foreground mr-2'>제작기간:</span>
                  <span>{data.date}</span>
                </div>
                <div className='mb-2 text-sm'>
                  <span className='text-muted-foreground mr-2'>기여도:</span>
                  <span>{data.contribution}</span>
                </div>
                <div className='mb-2 text-sm'>
                  <span className='text-muted-foreground mr-2'>배포:</span>
                  {hasUrl ? (
                    <a className='text-green-500' href={data.url!} target='_blank' rel='noreferrer'>
                      {data.url}
                    </a>
                  ) : (
                    <span className='text-red-300'>배포된 사이트가 없습니다.</span>
                  )}
                </div>
              </div>

              {hasTags && (
                <div className='mb-6 rounded-lg border p-5'>
                  <h3 className='mb-3 text-lg font-semibold'>태그</h3>
                  <ul className='flex flex-wrap gap-2'>
                    {data.tags.map((tag, idx) => (
                      <li key={idx}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasStacks && (
                <div className='rounded-lg border p-5'>
                  <h3 className='mb-3 text-lg font-semibold'>사용 기술</h3>
                  <ul className='flex flex-wrap items-center gap-2'>
                    {data.detailContent.stacks.map((stack, index) => (
                      <StackItem key={index} stack={stack} />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <Preview previewImageData={data.detailContent.previewImages} />
    </main>
  );
};

export default WorksDetailPage;

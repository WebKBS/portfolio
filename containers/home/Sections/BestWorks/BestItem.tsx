'use client';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { bestProjectList } from '@/portfolio-data/bestProjectList';
import useStickyObserver from '@/hooks/useStickyObserver';
import Link from 'next/link';
import { shimmer, toBase64 } from '@/utils/imageSkeleton';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Button } from '@/components/ui/button';
import { MdOpenInNew } from 'react-icons/md';
import { skillImageObject } from '@/portfolio-data/aboutSkillsData';

const getSkillName = (img: StaticImageData): string => {
  const entry = Object.entries(skillImageObject).find(([, value]) => value === img);
  if (!entry) return 'Skill';
  const key = entry[0];
  // Friendly label mapping
  const map: Record<string, string> = {
    next: 'Next.js',
    react: 'React',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    css: 'CSS',
    html: 'HTML',
    docker: 'Docker',
    aws: 'AWS',
    git: 'Git',
    'asp.net core': 'ASP.NET Core',
    sass: 'Sass',
    tailwind: 'Tailwind CSS',
  };
  return map[key] ?? key.replace(/\b\w/g, (c) => c.toUpperCase());
};

const BestItem = () => {
  const { itemRefs, visibleIndex } = useStickyObserver(0.4);

  return (
    <>
      {bestProjectList.map((work, index) => (
        <li
          key={work.id}
          ref={(el: never) => (itemRefs.current[index] = el)}
          className={cn(
            'sticky top-[100px] left-0 rounded-xl transition-all duration-700',
            visibleIndex === index ? `z-[1] scale-100 opacity-100` : `scale-95 opacity-10`,
          )}
        >
          <div className='bg-background/70 dark:bg-background/70 relative flex min-h-[80vh] overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm'>
            <div className='bg-background/80 md:backdrop-blur-0 relative z-[2] flex w-full flex-col gap-4 p-5 break-keep whitespace-pre-line backdrop-blur-sm md:bg-transparent md:p-8 lg:w-[50%]'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-2xl font-bold md:text-3xl'>{work.title}</h3>
                <p className='text-muted-foreground text-xs'>{work.period}</p>
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                <Button asChild size='sm'>
                  <a
                    href={work.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${work.title} 사이트 방문`}
                  >
                    사이트 방문 <MdOpenInNew className='ml-1 inline-block' />
                  </a>
                </Button>
                <Button asChild size='sm' variant='outline'>
                  <Link href={work.detailUrl} aria-label={`${work.title} 자세히 보기`}>
                    자세히 보기
                  </Link>
                </Button>
              </div>
              <p className='text-foreground/90 text-sm leading-7 md:text-base'>
                {work.description}
              </p>
              <ul className='mb-2 flex flex-wrap gap-2'>
                {work.skills.map((skill, i) => {
                  const name = getSkillName(skill as StaticImageData);
                  return (
                    <li
                      key={i}
                      className='group relative flex items-center rounded-md border bg-gray-600 p-1.5 shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                    >
                      <Image
                        src={skill}
                        alt={name}
                        title={name}
                        height={32}
                        width={32}
                        className='h-6 w-auto object-contain'
                      />
                      <span
                        className='pointer-events-none absolute top-full left-1/2 z-10 mt-1 -translate-x-1/2 rounded bg-black/80 px-1.5 py-0.5 text-[10px] whitespace-nowrap text-white opacity-0 shadow-sm transition-opacity group-focus-within:opacity-100 group-hover:opacity-100'
                        aria-hidden='true'
                      >
                        {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='absolute top-0 right-0 h-full w-full overflow-hidden'>
              {/* Gradient overlay to improve text contrast when overlapping */}
              <div className='from-background/70 via-background/30 md:from-background/50 md:via-background/20 pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l to-transparent' />
              <ResponsiveImage
                desktop={work.desktopImage}
                mobile={work.mobileImage}
                alt={work.title}
                className={cn(
                  'absolute top-0 right-6 max-w-3xl -skew-x-6 rounded-lg object-cover transition-transform duration-500',
                  visibleIndex !== index ? 'opacity-10' : 'hover:scale-[1.02]',
                )}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
                loading={'lazy'}
              />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default BestItem;

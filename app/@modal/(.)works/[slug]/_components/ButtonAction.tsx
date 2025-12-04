import { Button, buttonVariants } from '@/components/ui/button';
import { useRouterModalToggle } from '@/store/modal-store';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ButtonAction = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const { setRouterModalState } = useRouterModalToggle();

  const closeHandler = () => {
    setRouterModalState(false);
    router.back();
  };

  return (
    <div className='bg-background mx-auto flex w-full max-w-xs gap-2 p-3 md:mr-0 md:ml-auto'>
      <Button className='flex-1' variant='outline' onClick={closeHandler}>
        닫기
      </Button>
      <Link
        className={buttonVariants({
          variant: 'secondary',
          className: 'flex-1',
        })}
        onClick={() => setRouterModalState(false)}
        href={`/portfolio/${slug}`}
      >
        자세히 보기
      </Link>
    </div>
  );
};

export default ButtonAction;

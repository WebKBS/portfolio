import topMockup from '@/public/images/mockup/iphone-top.png';
import iphoneMockup from '@/public/images/mockup/iphone.png';
import Image, { StaticImageData } from 'next/image';
import Loading from '../Loading/LoadingSpinner';
import styles from './IphoneMockup.module.css';

interface IphoneMockupProps {
  src: StaticImageData | string;
  title: string;
}

const IphoneMockup = ({ src, title }: IphoneMockupProps) => {
  return (
    <div className={styles.iphoneBox}>
      <Image src={iphoneMockup} alt='아이폰 목업' className={styles.iphoneMockup} priority />
      <div className={styles.iphoneImageBox}>
        <div className={styles.topBox}>
          <Image src={topMockup} alt={title} className={styles.topImage} />
        </div>
        <Loading />
        <Image
          width={400}
          height={400}
          src={src}
          alt={title}
          className={styles.iphoneImage}
          quality={100}
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default IphoneMockup;

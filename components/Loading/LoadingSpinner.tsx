import Image from "next/image";
import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <Image
      src="/loading/loading.svg"
      width={50}
      height={50}
      alt="loading"
      className={styles.loading}
    />
  );
};

export default LoadingSpinner;

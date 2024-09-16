import Image from "next/image";
import loadingSvg from "@/public/images/loading/loading.svg";

import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return <Image src={loadingSvg} alt="loading" className={styles.loading} />;
};

export default LoadingSpinner;

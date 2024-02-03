'use client';
import LottieAnimation from '@/lottie/animation.json';
import Lottie from 'lottie-react';

const LottieComp = () => {
  return <Lottie animationData={LottieAnimation} loop={true}></Lottie>;
};

export default LottieComp;

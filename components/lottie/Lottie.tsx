'use client';
import LottieAnimation from '@/lottie/animation.json';
import Lottie from 'lottie-react';

const LottieComp = () => {
  return (
    <Lottie
      className="w-64 md:w-96 mx-auto sm:mx-0 sm:mr-0 sm:ml-auto"
      animationData={LottieAnimation}
      loop={true}
    ></Lottie>
  );
};

export default LottieComp;

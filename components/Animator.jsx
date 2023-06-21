"use client";

import Lottie from "lottie-react";

const Animator = ({ animation }) => {
  return <Lottie animationData={animation} loop={true} />;
};

export default Animator;

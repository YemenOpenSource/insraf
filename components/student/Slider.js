import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import insarf_welcome from "@/public/insarf_welcome.svg";
import insarf_one from "@/public/insarf_1.svg";
import slider_two from "@/public/images/slider/2.png";
import slider_three from "@/public/images/slider/3.png";
import slider_four from "@/public/images/slider/4.png";
import { ArrowLeft, ArrowRight } from "react-iconly";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    insarf_welcome,
    insarf_one,
    slider_two,
    slider_three,
    slider_four,
  ];

  const imageContainerRef = useRef();

  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    // set an interval to change the slide after every 5 seconds
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 2500);
    // clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    // set the width and height of the image container
    imageContainerRef.current.style.width = "100%";
    imageContainerRef.current.style.height = "100%";
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center" ref={imageContainerRef}>
        <Image src={images[currentIndex]} className="w-[500px]" alt="Image" />
      </div>
      <div className="flex justify-between px-2 absolute right-0 left-0 top-32">
        <button
          className="text-white bg-blue-700/70 hover:bg-blue-600/70 focus:ring-blue-500
        py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
        font-bolder select-none"
          onClick={goToPrevSlide}
        >
          <ArrowRight primaryColor="white" stroke="bold" size="medium" />
        </button>
        <button
          className="text-white bg-blue-700/70  hover:bg-blue-600/70 focus:ring-blue-500
        py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
        font-bolder select-none"
          onClick={goToNextSlide}
        >
          <ArrowLeft primaryColor="white" stroke="bold" size="medium" />
        </button>
      </div>
    </div>
  );
}

/* 
<p className="text-2xl font-bolder text-blue-700 m-0 mt-4">
مرحباً بك عزيزي الطالب
</p>
<p className="text-md font-regular text-gray-500">
ثلاث خطوات لتحضير في إنصراف
</p> */

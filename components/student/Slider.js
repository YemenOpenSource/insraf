import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import insarf_welcome from "@/public/insarf_welcome.svg";
import insarf_one from "@/public/insarf_1.svg";
import insarf_two from "@/public/insarf_2.svg";
import insarf_three from "@/public/insarf_3.svg";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [insarf_welcome, insarf_one, insarf_two, insarf_three];

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
    <div>
      <div className="flex justify-center" ref={imageContainerRef}>
        <Image src={images[currentIndex]} className="w-[500px]" alt="Image" />
      </div>
      <button className="mx-2" onClick={goToPrevSlide}>Previous</button>
      <button className="mx-2" onClick={goToNextSlide}>Next</button>
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

"use client";

import { Slide } from "../../utils/interfaces";

export default function SlideContent({ slide }: { slide: Slide }) {
  return (
    <>
      <div className="flex gap-6 lg:flex-col lg:justify-between lg:h-full">
        <slide.img className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mb-[56px] flex-none" />
        <h3 className="2xl:text-[32px] 2xl:leading-[36px] text-2xl  leading-7 max-w-[365px] mb-[60px] lg:mb-0">
          {slide.content}
        </h3>
      </div>

      <div className="text-[14px] leading-5 lg:hidden">{slide.description}</div>
    </>
  );
}

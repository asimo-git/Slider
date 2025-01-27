"use client";

import { Slide } from "../../utils/interfaces";

export default function SlideContent({ slide }: { slide: Slide }) {
  return (
    <>
      <slide.img className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mb-[56px]" />
      <h3 className="2xl:text-[32px] 2xl:leading-[36px] text-2xl  leading-7 max-w-[365px]">
        {slide.content}
      </h3>
    </>
  );
}

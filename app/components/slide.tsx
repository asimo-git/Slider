import { Slide } from "../interfaces/interfaces";

export default function SlideComponent({ slide }: { slide: Slide }) {
  return (
    <article
      aria-label={`Slide ${slide.id}`}
      className="flex-none w-[calc(25%-16px)] bg-slideBg rounded-lg p-6 flex flex-col justify-between"
    >
      <slide.img className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mb-[56px]" />
      <h3 className="text-[32px] leading-[36px] max-w-[365px]">
        {slide.content}
      </h3>
    </article>
  );
}

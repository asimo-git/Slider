import { SliderProps } from "../interfaces/interfaces";
import SlideComponent from "./slide";

export default function Slider({ slides }: SliderProps) {
  return (
    <section aria-label="Services Slider">
      <div className="overflow-hidden">
        <div className="flex gap-4 p-4">
          {slides.map((slide) => (
            <SlideComponent key={slide.id} slide={slide}></SlideComponent>
          ))}
        </div>
      </div>
    </section>
  );
}

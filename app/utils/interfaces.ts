import { FC, SVGProps } from "react";

export interface Slide {
  id: number;
  content: string;
  img: FC<SVGProps<SVGSVGElement>>;
}

export interface SliderProps {
  slides: Slide[];
  activeSlide: number;
}

export interface SliderPaginationProps {
  activeSlide: number;
  numberOfElements: number;
  onSlideChange: (index: number) => void;
  numberOfSlidesPerView: number;
}

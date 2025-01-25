import { FC, SVGProps } from "react";

export interface Slide {
  id: number;
  content: string;
  img: FC<SVGProps<SVGSVGElement>>;
}

export interface SliderProps {
  slides: Slide[];
}

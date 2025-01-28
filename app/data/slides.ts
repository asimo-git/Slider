import Icon1 from "../assets/svg/icon1.svg";
import Icon2 from "../assets/svg/icon2.svg";
import Icon3 from "../assets/svg/icon3.svg";
import Icon4 from "../assets/svg/icon4.svg";
import Icon5 from "../assets/svg/icon5.svg";
import Icon6 from "../assets/svg/icon6.svg";
import { Slide } from "../utils/interfaces";

export const slides: Slide[] = [
  {
    id: 1,
    content: "Анализ текущего состояния карьеры",
    description:
      "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
    img: Icon1,
  },
  {
    id: 2,
    content: "Поиск работы",
    description:
      "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
    img: Icon2,
  },
  {
    id: 3,
    content: "Сопроводительные письма и резюме ",
    description:
      "Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.",
    img: Icon3,
  },
  {
    id: 4,
    content: "Тренинг по презентации личного бренда",
    description:
      "Подсветим сильные стороны и грамотно выстроим самопрезентацию.",
    img: Icon4,
  },
  {
    id: 5,
    content: "Подготовка к собеседованию",
    description: "Научим говорить о себе кратко, ярко и профессионально.",
    img: Icon5,
  },
  {
    id: 6,
    content: "Рекомендация по базе STEMPS Career",
    description: "Поможем встретиться соискателю и работодателю. ",
    img: Icon6,
  },
];

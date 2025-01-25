import Slider from "./components/slider";
import { slides } from "./data/slides";

export default function Home() {
  return (
    <main className="">
      <h2>Наши услуги</h2>
      <Slider slides={slides} />
    </main>
  );
}

import { Carousel } from "./components/carousel/Carousel";
import { CarouselItem } from "./components/carousel/Item";
import "./styles.css";

function App() {
  const items = [
    <CarouselItem>Item 1</CarouselItem>,
    <CarouselItem>Item 2</CarouselItem>,
    <CarouselItem>Item 3</CarouselItem>,
    <CarouselItem>Item 4</CarouselItem>,
    <CarouselItem>Item 5</CarouselItem>,
  ];
  return (
    <div className="app-container">
      <Carousel items={items} offset={20} />
    </div>
  );
}

export default App;

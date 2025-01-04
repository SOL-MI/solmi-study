import { createLazyFileRoute } from "@tanstack/react-router";
import { CarouselItem } from "../components/carousel/Item";
import { Carousel } from "../components/carousel/Carousel";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
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

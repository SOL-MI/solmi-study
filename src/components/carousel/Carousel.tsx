import { useEffect, useRef, useState } from "react";
import { CarouselItem } from "./Item";
import { CarouselButton } from "./Button";
import { CarouselProvider } from "./context";

interface CarouselProps {
  items: React.ReactNode[];
  /**
   * @description 아이템 간의 간격
   */
  offset?: number;
}
export const Carousel = ({ items, offset = 10 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isTransitioning = useRef(false);
  const carouselRef = useRef(null);

  const extendedItems = [items[items.length - 1], ...items, items[0]];

  useEffect(() => {
    if (isTransitioning.current) {
      const timer = setTimeout(() => {
        isTransitioning.current = false;
        if (currentIndex >= items.length + 1) {
          setCurrentIndex(1);
        } else if (currentIndex <= 0) {
          setCurrentIndex(items.length);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, items.length]);

  const moveCarousel = (direction: number) => {
    if (!isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentIndex((prevIndex) => prevIndex + direction);
    }
  };

  const getTransform = () => `translateX(-${currentIndex * 100}%)`;

  return (
    <CarouselProvider
    currentIndex={currentIndex}
    setCurrentIndex={setCurrentIndex}
    offset={offset}
    >
      <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div
          ref={carouselRef}
        style={{
          display: "flex",
          transform: getTransform(),
          transition: isTransitioning.current
            ? "transform 0.3s ease-in-out"
            : "none",
        }}
      >
        {extendedItems.map((item, index) => (
          <div key={index} style={{ flex: "0 0 100%" }}>
            {item}
          </div>
        ))}
      </div>
        <CarouselButton onClick={() => moveCarousel(-1)} style={{ left: offset + 10 }}>
          {"<"}
        </CarouselButton>
        <CarouselButton onClick={() => moveCarousel(1)} style={{ right: offset + 10 }}>
          {">"}
        </CarouselButton>
      </div>
    </CarouselProvider>
  );
};

Carousel.Item = CarouselItem;
Carousel.Button = CarouselButton;
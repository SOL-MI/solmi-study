import { Children, useEffect, useRef, useState } from "react";
import { CarouselItem } from "./Item";
import { CarouselButton } from "./Button";
import { CarouselProvider } from "./context";
import { carouselContainerStyle } from "./carousel.css";
import { useDebounce } from "../../hooks/useDebounce";

interface CarouselProps {
  items?: React.ReactNode[];
  /**
   * @description 아이템 간의 간격
   */
  offset?: number;
  children?: React.ReactNode;
}
export const Carousel = ({ items, offset = 10, children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isTransitioning = useRef(false);
  const carouselRef = useRef(null);

  const childrenArray = Children.toArray(children);
  const extendedItems = [
    childrenArray[childrenArray.length - 1],
    ...childrenArray,
    childrenArray[0],
  ];

  const handleIndexReset = useDebounce(() => {
    isTransitioning.current = false;
    if (currentIndex >= childrenArray.length + 1) {
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setCurrentIndex(childrenArray.length);
    }
  }, 300);
  // const extendedItems = [items[items.length - 1], ...items, items[0]];

  // const handleIndexReset = useDebounce(() => {
  //   isTransitioning.current = false;
  //   if (currentIndex >= items.length + 1) {
  //     setCurrentIndex(1);
  //   } else if (currentIndex <= 0) {
  //     setCurrentIndex(items.length);
  //   }
  // }, 300);

  useEffect(() => {
    if (isTransitioning.current) {
      handleIndexReset();
    }
    return () => {
      handleIndexReset.cancel();
    };
  }, [currentIndex, childrenArray.length, handleIndexReset]);

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
      <div className={carouselContainerStyle}>
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
        <CarouselButton
          onClick={() => moveCarousel(-1)}
          style={{ left: offset + 10 }}
        >
          {"<"}
        </CarouselButton>
        <CarouselButton
          onClick={() => moveCarousel(1)}
          style={{ right: offset + 10 }}
        >
          {">"}
        </CarouselButton>
      </div>
    </CarouselProvider>
  );
};

Carousel.Item = CarouselItem;
Carousel.Button = CarouselButton;

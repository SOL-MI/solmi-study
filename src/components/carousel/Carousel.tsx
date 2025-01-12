import {
  Children,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from "react";
import { CarouselItem } from "./Item";
import { CarouselButton } from "./Button";
import { CarouselProvider } from "./context";
import { carouselContainerStyle } from "./carousel.css";
import { useDebounce } from "../../hooks/useDebounce";
import clsx from "clsx";

interface CarouselProps extends PropsWithChildren {
  /**
   * @description 아이템 간의 간격
   */
  offset?: number;
  leftAffix?: ReactNode;
  rightAffix?: ReactNode;
  style?: CSSProperties;
  className?: string;
}
export const Carousel = ({
  offset = 10,
  children,
  leftAffix,
  rightAffix,
  style,
  className,
  ...restProps
}: CarouselProps) => {
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

  const moveCarousel = (direction: number) => {
    if (!isTransitioning.current) {
      isTransitioning.current = true;
      setCurrentIndex((prevIndex) => prevIndex + direction);
      handleIndexReset();
    }
  };

  const getTransform = () => `translateX(-${currentIndex * 100}%)`;

  return (
    <CarouselProvider
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      offset={offset}
      moveCarousel={moveCarousel}
    >
      <div
        className={clsx(carouselContainerStyle, className)}
        style={style}
        {...restProps}
      >
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
        {leftAffix}
        {rightAffix}
      </div>
    </CarouselProvider>
  );
};

Carousel.Item = CarouselItem;
Carousel.Button = CarouselButton;

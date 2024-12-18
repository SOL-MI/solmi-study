import { createContext } from "../../utils/create-context";

interface CarouselContextType {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  offset: number; // item 간의 간격
}

export const [CarouselProvider, useCarouselContext] = createContext<CarouselContextType>('Carousel');

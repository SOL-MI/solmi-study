import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}
export const Carousel = ({ items }: CarouselProps) => {
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
      <button
        onClick={() => moveCarousel(-1)}
        style={{ position: "absolute", left: 10, top: "50%" }}
      >
        {"<"}
      </button>
      <button
        onClick={() => moveCarousel(1)}
        style={{ position: "absolute", right: 10, top: "50%" }}
      >
        {">"}
      </button>
    </div>
  );
};

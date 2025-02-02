"use client";

import { ButtonHTMLAttributes, CSSProperties } from "react";
import { useCarouselContext } from "./context";

export interface CarouselButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

export const CarouselButton = (props: CarouselButtonProps) => {
  const { children, style: styleFromProps, direction, ...restProps } = props;
  const { offset, moveCarousel } = useCarouselContext("Carousel.Button");

  const style: CSSProperties = {
    position: "absolute",
    top: "50%",
    borderRadius: "8px",
    outline: "none",
    border: "none",
    padding: "5px 8px",
    backgroundColor: "transparent",
    ...(direction === "left" ? { left: offset + 10 } : { right: offset + 10 }),
    ...styleFromProps,
  };

  const handleClick = () => {
    if (direction === "left") {
      moveCarousel(-1);
    } else {
      moveCarousel(1);
    }
  };

  return (
    <button {...restProps} onClick={handleClick} style={style}>
      {children}
    </button>
  );
};

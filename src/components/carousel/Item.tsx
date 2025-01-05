import { CSSProperties, HTMLAttributes } from "react";
import { useCarouselContext } from "./context";
import { carouselItemStyle } from "./carousel.css";
import clsx from "clsx";

export const CarouselItem = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, style: styleFromProps, ...restProps } = props;
  const { offset } = useCarouselContext("CarouselItem");

  const style: CSSProperties = {
    margin: `0 ${offset}px`,
    ...styleFromProps,
  };

  return (
    <div
      className={clsx(carouselItemStyle, className)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  );
};

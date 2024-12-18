import { CSSProperties, HTMLAttributes } from "react";
import { useCarouselContext } from "./context";

export const CarouselItem = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, style:styleFromProps, ...restProps } = props;
  const { offset } = useCarouselContext('CarouselItem');

  const style:CSSProperties = {
    height: 240,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: `0 ${offset}px`,
    ...styleFromProps,
  };

  return (
    <div {...restProps} style={style}>
      {children}
    </div>
  );
};

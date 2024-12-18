import { ButtonHTMLAttributes, CSSProperties } from "react";

type CarouselButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CarouselButton = (props: CarouselButtonProps) => {
  const { children, style:styleFromProps, ...restProps } = props;
  const style: CSSProperties = {
    position: "absolute",
    top: "50%",
    borderRadius: "8px",
    outline: "none",
    border: "none",
    padding: "5px 8px",
    ...styleFromProps,
  };

  return (
    <button {...restProps} style={style}>
      {children}
    </button>
  );
};

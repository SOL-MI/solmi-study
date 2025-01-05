import { style } from "@vanilla-extract/css";

export const carouselContainerStyle = style({
  overflow: "hidden",
  width: "100%",
  position: "relative",
});

export const carouselWrapperStyle = style({
  backgroundColor: "black",
});

export const carouselImgStyle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: 10,
});

export const carouselItemStyle = style({
  borderRadius: 10,
  backgroundColor: "#fff",
  position: "relative",
});

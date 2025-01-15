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
  flex: "0 0 100%",
  minHeight: "200px",
  backgroundSize: "cover",
  objectFit: "cover",
  overflow: "hidden",
});

export const carouselTitleStyle = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom: 0,
  left: 0,
  color: "#fff",
  width: "100%",
});

export const carouselOverviewStyle = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom: "0",
  top: 0,
  left: 0,
  right: 0,
  color: "#fff",
  padding: "0 20%",
});

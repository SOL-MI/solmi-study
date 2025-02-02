import clsx from "clsx";
import {
  carouselItemStyle,
  carouselOverviewStyle,
  carouselTitleStyle,
} from "./carousel.css";
import { makePlugOf } from "../../utils/makePlugOf";
import { withOutlet } from "../../utils/withOutlet";
import { CSSProperties, HTMLAttributes } from "react";

const CardItemWithSlots = withOutlet(
  ["Title", "Overview", "VoteAverage"],
  ({
    outlets,
    className,
    style: styleFromProps,
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & {
    outlets: Record<string, React.ReactNode>;
  }) => {
    const style: CSSProperties = {
      ...styleFromProps,
    };

    return (
      <div
        className={clsx(carouselItemStyle, className)}
        style={style}
        {...restProps}
      >
        {outlets.Title}
        {outlets.VoteAverage}
        {outlets.Overview}
      </div>
    );
  }
);
export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={clsx(carouselTitleStyle, className)}>{children}</h2>;

export const CardOverview = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <p className={clsx(carouselOverviewStyle, className)}>{children}</p>;

export const CardVoteAverage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={className}>{children}</span>;

export const CarouselItem = Object.assign(CardItemWithSlots, {
  Title: makePlugOf("Title", CardTitle),
  Overview: makePlugOf("Overview", CardOverview),
  VoteAverage: makePlugOf("VoteAverage", CardVoteAverage),
});

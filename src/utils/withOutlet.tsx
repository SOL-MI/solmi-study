import React, { ReactNode } from "react";

export const withOutlet = <T extends string>(
  slotNames: T[],
  Component: (props: { outlets: Record<T, ReactNode> } & any) => JSX.Element
) => {
  return function WithOutletComponent(props: any) {
    const outlets = slotNames.reduce(
      (acc, slot) => {
        acc[slot] =
          React.Children.toArray(props.children).find(
            (child: any) => child.type.slotName === slot
          ) || null;
        return acc;
      },
      {} as Record<T, ReactNode>
    );

    return <Component {...props} outlets={outlets} />;
  };
};

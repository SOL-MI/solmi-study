import { ReactNode } from "react";

export const withOutlet = <T extends string>(
  slotNames: T[],
  Component: (props: { outlets: Record<T, ReactNode> } & any) => JSX.Element
) => {
  return function WithOutletComponent(props: any) {
    const outlets = slotNames.reduce(
      (acc, slot) => {
        console.log("slot", slot);
        console.log("acc", acc);
        acc[slot] =
          props.children.find((child: any) => child.type.slotName === slot) ||
          null;
        return acc;
      },
      {} as Record<T, ReactNode>
    );

    console.log("Outlets:", outlets);

    return <Component {...props} outlets={outlets} />;
  };
};

export const makePlugOf = (slotName: string) => {
  const Plug = (props: any) => props.children;
  Plug.slotName = slotName;
  return Plug;
};

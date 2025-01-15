import React, {
  forwardRef,
  ComponentPropsWithoutRef,
  ForwardedRef,
} from "react";
import clsx from "clsx";

const getPluginCompDisplayName = (slotName: string) => `Plugin.${slotName}`;

export const makePlugOf = (
  slotName: string,
  DefaultComponent: React.ComponentType<any>
) => {
  const PluginComp = forwardRef(
    (
      props: ComponentPropsWithoutRef<"div">,
      forwardedRef: ForwardedRef<HTMLElement>
    ) => {
      const { children, className: propsClassName, ...rest } = props;

      return (
        <DefaultComponent
          {...rest}
          className={clsx(propsClassName)}
          ref={forwardedRef}
        >
          {children}
        </DefaultComponent>
      );
    }
  );

  PluginComp.displayName = getPluginCompDisplayName(slotName);

  return PluginComp;
};

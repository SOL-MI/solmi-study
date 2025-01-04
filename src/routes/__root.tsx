import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Outlet />
      <TanStackRouterDevtools />
    </Fragment>
  );
}

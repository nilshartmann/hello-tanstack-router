import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: GlobalPageLayout,
});

export default function GlobalPageLayout() {
  return (
    <div className="flex min-h-screen flex-col p-8">
        <Outlet />
      <div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/a"}>A</Link></li>
          <li><Link to={"/a/"}>A Slash</Link></li>
          <li><Link to={"/a/b"}>A/B</Link></li>
          <li><Link to={"/a/aa"}>A/AA (within Layout Route _c)</Link></li>
          <li><Link to={"/a/bb"}>A/BB (within Layout Route _c)</Link></li>
          <li><Link to={"/a/p1"}>A/P1 within route group "(d)"</Link></li>
          <li><Link to={"/a/fff"}>A/FFF within route group "(d)"</Link></li>
          <li><Link to={"/a/fff/ggg"}>A/FFF/GGG within route group "(d)"</Link></li>
        </ul>
      </div>
      <TanStackRouterDevtools/>
    </div>
  );
}

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
          <li><Link to={"/a"}>A (should point to index route /a)</Link></li>
          <li><Link to={"/a/"}>A Slash (should also point to index route /a)</Link></li>
          <li><Link to={"/n"}>N (route.tsx only)</Link></li>
          <li><Link to={"/n/nn"}>N/NN <span className={"text-red-400"}>Goes to /n component?</span> </Link></li>
          <li><Link to={"/x"}>/X (index.tsx only)</Link></li>
          <li><Link to={"/x/y"}>/X/Y <span className={"text-red-400"}>not nested in /x, as /x is index.tsx only</span>(</Link></li>

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

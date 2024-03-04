import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/n')({
  component: () => <div className={"bg-amber-200 p-8"}>
    Hello Index + Layout /n!
  <Outlet />
  </div>
})
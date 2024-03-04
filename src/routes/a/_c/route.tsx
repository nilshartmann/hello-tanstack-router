import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/a/_c')({
  component: () => <div className={"bg-orange-200 p-8"}>
		<p>Hello C Layout Route</p>

		<div className={"p-8"}>
		<Outlet />
		</div>

	</div>
})
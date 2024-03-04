import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/a')({
  component: () => <div className={"bg-green-200 p-8"}>Hello a-Layout-Route

		<div className={"p-4"}>
			<Outlet />
		</div>

	</div>
})
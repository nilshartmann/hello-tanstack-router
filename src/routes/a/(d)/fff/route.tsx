import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/a/(d)/fff')({
	component: () => <div className={"bg-blue-200 p-8"}>Hello Layout-Route
		in /a/(d)/fff

		<div className={"p-4"}>
			<Outlet />
		</div>

	</div>
})
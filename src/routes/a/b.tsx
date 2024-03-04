import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/a/b')({
	component: () => <div>
		<p>Hello /a/b!</p>
		<Outlet />
	</div>
})


//
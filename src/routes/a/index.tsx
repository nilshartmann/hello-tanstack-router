import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/a/')({
  component: () => <div>
		<p>Hello /a/!</p>
	<Outlet />
	</div>
})
import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/x/')({
  component: () => <div className={"p-8"}>Hello Index Route /x/!
		<Outlet />
	</div>
})
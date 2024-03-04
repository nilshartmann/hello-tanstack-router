import {createFileRoute, Outlet} from "@tanstack/react-router";

export const Route = createFileRoute('/a/(d)/fff/ggg')({
	component: () => <div className={"p-8"}>Hello Index
		/a/(d)/fff/ggg.tsx

		<div className={"p-4"}>
			<Outlet />
		</div>

	</div>
})

//

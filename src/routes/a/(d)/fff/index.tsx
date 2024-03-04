import {createFileRoute, Outlet} from "@tanstack/react-router";

export const Route = createFileRoute('/a/(d)/fff/')({
	component: () => <div className={"bg-green-200 p-8"}>Hello Index
		/a/(d)/fff/index.tsx

		<div className={"p-4"}>
			<Outlet />
		</div>

	</div>
})

//

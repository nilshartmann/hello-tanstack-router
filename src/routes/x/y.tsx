import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/x/y')({
  component: () => <div className={"p-8"}>Hello /x/y!</div>
})
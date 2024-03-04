import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/n/nn')({
  component: () => <div className={"p-8"}>Hello /n/nn!</div>
})
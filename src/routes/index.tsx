import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div className={"p-8 bg-slate-200"}>Hello Root-Index-Route /!</div>
})
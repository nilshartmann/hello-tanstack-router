import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a/_c/bb')({
  component: () => <div>Hello /a/_c/bb!</div>
})
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a/_c/aa')({
  component: () => <div>Hello /a/_c/a!</div>
})
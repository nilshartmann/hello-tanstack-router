import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a/(d)/p1')({
  component: () => <div>Hello /a/(d)/p1!</div>
})
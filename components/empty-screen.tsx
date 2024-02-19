import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Mostra',
    message: `Cosa posso vedere alla mostra"?`
  },
  {
    heading: 'Esibizione',
    message: 'Quando è stata costruita la villa?: \n'
  },
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
        <p className="mb-2 leading-normal text-lg pl-8">
        Bentrovato 🤠 sono Sibilla, la tua guida personale. Dai, iniziamo cosa vuoi sapere?
        </p>
        </div>
  )
}

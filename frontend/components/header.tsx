import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { IconGitHub } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { NewChatButton } from './new-chat-button'
import { ThemeToggle } from './theme-toggle'

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="mr-12 flex items-center">
       
      </div>

      <NewChatButton />
      <div className="flex items-center justify-end space-x-2">
        <ThemeToggle />
       
      </div>
    </header>
  )
}

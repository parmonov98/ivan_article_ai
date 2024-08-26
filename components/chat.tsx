'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'
import { useUIState } from 'ai/rsc'
import ChatHero from "@/components/chat-hero";

type ChatProps = {
  id?: string
  query?: string
}

export function Chat({ id, query }: ChatProps) {
  const path = usePathname()
  const [messages] = useUIState()
    console.log(id)
  useEffect(() => {
    if (!path.includes('search') && messages.length === 1) {
      window.history.replaceState({}, '', `/search/${id}`)
    }
  }, [id, path, messages, query])

  return (
    <div className="px-8 sm:px-2 pt-2 md:pt-14 pb-4 md:pb-4 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4">
      <ChatMessages messages={messages} />
      <ChatHero/>
      <ChatPanel messages={messages} query={query} />
    </div>
  )
}

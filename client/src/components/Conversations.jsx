import React from 'react'
import { useConversations } from '../Contexts/ConversationsProvider'

export default function Conversations() {
  const { conversations } = useConversations();
  if (!conversations) {
    return null;
  }
  return (
    <ul className='text-white w-full'>
      {conversations.map((conversation, index) => (
        <li className='w-auto text-lg p-4' key={index} style={{borderBottom:`1px solid rgb(229 231 235)`}}>
          {conversation.recipients.map(r=>r.name).join(', ')}  
        </li>
      ))}
    </ul>
  )
}

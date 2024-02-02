import React from 'react'
import { useConversations } from '../Contexts/ConversationsProvider'

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  if (!conversations) {
    return null;
  }
  return (
    <ul className='text-white w-full overflow-auto'>
      {conversations.map((conversation, index) => (
        <li className={`w-auto text-lg p-4 cursor-pointer hover:bg-gray-500 ${conversation.selected ? 'bg-gray-500' : ''}`} key={index} style={{borderBottom:`1px solid rgb(229 231 235)`}} onClick={()=>selectConversationIndex(index)}>
          {conversation.recipients.map(r=>r.name).join(', ')}  
        </li>
      ))}
    </ul>
  )
}

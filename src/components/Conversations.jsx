import React from 'react'
import { useConversations } from '../Contexts/ConversationsProvider'

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  if (!conversations) {
    return null;
  }
  return (
    <ul className='text-lightGray w-full overflow-auto'>
      {conversations.map((conversation, index) => (
        <li className={`w-auto flex items-center gap-4 text-lg p-4 cursor-pointer hover:bg-darker ${conversation.selected ? 'bg-darker' : 'bg-lighter'}`} key={index} style={{borderBottom:`3px solid #1F232A`}} onClick={()=>selectConversationIndex(index)}>
          <div className='w-12 h-12 rounded-full pfp'/>
          {conversation.recipients.map(r=>r.name).join(', ')}  
        </li>
      ))}
    </ul>
  )
}

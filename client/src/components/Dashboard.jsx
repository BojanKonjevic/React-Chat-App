import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../Contexts/ConversationsProvider'

export default function Dashboard({id}) {
  const {selectedConversation} = useConversations();
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar id={id}/>
      {selectedConversation && <OpenConversation/>}
    </div>
  )
}

import React, { useContext, useState } from 'react';
import { ContactsProvider, useContacts } from '../Contexts/ContactsProvider';
import { useRef } from 'react';
import { useConversations } from "../Contexts/ConversationsProvider"

export default function NewConversationModal({ closeModal }) {

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  const errRef = useRef();
  function handleSubmit(e){
    e.preventDefault();
    if(selectedContactIds.length===0){
      errRef.current.textContent="Select at least 1 contact."
    }
    else{
      createConversation(selectedContactIds);
      closeModal();
    }

  }
  function handleCheckBoxChange(contactId){
    setSelectedContactIds(prevSelectedContactIds=>{
      if(prevSelectedContactIds.includes(contactId)){
        return prevSelectedContactIds.filter(prevId =>{
          return contactId !== prevId;
        })
      }
      else{
        return [...prevSelectedContactIds, contactId];
      }
    })
  }

  return (
    <div className='relative p-6 flex flex-col justify-center items-center bg-zinc-900 w-1/4 text-gray-200'>
      <button className="absolute border-none bg-inherit text-gray-200 text-2xl font-semibold top-6 right-6 cursor-pointer" onClick={closeModal}>X</button>
      <div className='w-full flex border-b solid black'>
        <h2>Create Conversation</h2>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col w-full mt-4'>
        {contacts.map(contact =>(
          <div key={contact.id} className='flex w-full gap-4'>
            <input id={`${contact.id}Check`} className='mb-4' type="checkbox" value={selectedContactIds.includes(contact.id)} onChange={()=>{handleCheckBoxChange(contact.id)}}/>
            <label htmlFor={`${contact.id}Check`}>{contact.name}</label>
          </div>
        ))}
        <span ref={errRef}></span>  
        <button className='w-24 p-3 rounded-md border-none bg-blue-500 text-gray-200 mt-5 text-lg cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

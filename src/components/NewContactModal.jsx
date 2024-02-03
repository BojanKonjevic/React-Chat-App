import React, { useContext } from 'react';
import { useContacts, ContactsProvider } from '../Contexts/ContactsProvider';
import { useRef } from 'react';

export default function NewConversationModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const errRef = useRef();
  const { createContact, contacts } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();
    const newContactId = idRef.current.value;
    const newContactName = nameRef.current.value;
    if(contacts.some(contact=>contact.id===newContactId)){
      errRef.current.textContent="A contact with that ID already exists."
    }
    else if(contacts.some(contact=>contact.name===newContactName)){
      errRef.current.textContent="A contact with that name already exists."
    }
    else if(newContactName.length>30){
      errRef.current.textContent="Contact name can't be over 30 characters long."
    }
    else{
      createContact(newContactId, newContactName);
      closeModal();
    }
  }


  return (
    <div className='relative p-6 flex flex-col justify-center items-center bg-zinc-900 w-1/4 text-gray-200'>
      <button className="absolute border-none bg-inherit text-gray-200 text-2xl font-semibold top-6 right-6 cursor-pointer" onClick={closeModal}>X</button>
      <div className='w-full flex border-b solid black'>
        <h2>Create Contact</h2>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col w-full mt-4'>
        <label htmlFor="idInput" className='text-xl'>Id</label>
        <input ref={idRef} type="text" id='idInput' className='mt-2 text-xl p-2 rounded-md border mb-5 text-zinc-900' required/>
        <label htmlFor="nameInput" className='text-xl'>Name</label>
        <input ref={nameRef} type="text" id='nameInput' className='mt-2 text-xl p-2 rounded-md border text-zinc-900' required/>
        <span ref={errRef}></span>
        <button className='w-24 p-3 rounded-md border-none bg-blue-500 text-gray-200 mt-5 text-lg cursor-pointer'>Submit</button>
      </form>
    </div>  
  )
}
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
    <div className='relative p-6 flex flex-col justify-center items-center bg-darkest w-1/4 text-lightGray'>
      <button className="absolute border-none bg-inherit text-orange text-2xl font-semibold top-6 right-6 cursor-pointer" onClick={closeModal}>X</button>
      <div className='w-full flex border-b solid black'>
        <h2>Create Contact</h2>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col w-full mt-4'>
        <label htmlFor="idInput" className='text-xl'>Id</label>
        <input ref={idRef} type="text" id='idInput' className='bg-lightGray outline-none mt-2 text-xl p-2 rounded-md border mb-5 text-darkest' required/>
        <label htmlFor="nameInput" className='text-xl'>Name</label>
        <input ref={nameRef} type="text" id='nameInput' className='bg-lightGray outline-none mt-2 text-xl p-2 rounded-md border text-darkest' required/>
        <span className='text-orange mt-2' ref={errRef}></span>
        <button className='w-24 p-3 rounded-md border-none bg-blue text-lightGray mt-5 text-lg cursor-pointer'><b>Submit</b></button>
      </form>
    </div>  
  )
}

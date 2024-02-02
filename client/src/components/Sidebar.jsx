import React, { useState } from 'react';
import Conversations from "./Conversations.jsx";
import Contacts from "./Contacts.jsx";
import Modal from "./Modal.jsx";
import NewConversationModal from "./NewConversationModal.jsx";
import NewContactModal from "./NewContactModal.jsx";

export default function Sidebar({ id }) {
  const [isActiveConversations, setIsActiveConversations] = useState(true);
  const [isActiveContacts, setIsActiveContacts] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);  
  }

  function activateConversations() {
    setIsActiveConversations(true);
    setIsActiveContacts(false);
  }

  function activateContacts() {
    setIsActiveContacts(true);
    setIsActiveConversations(false);
  }

  return (
    <div className='bg-zinc-950 w-1/5 flex flex-col'>
      <div className='p-4 flex justify-between'>
        <img src="assets/pfp.jpg" alt="" className='w-12 h-12 rounded-full'/>
        <button className='bg-inherit border-none text-gray-200 cursor-pointer p-0 m-0'>Log Out</button>
      </div>
      <div className='buttonsDiv w-full m-0 p-0'>
        <button
          onClick={activateConversations}
          className={`w-1/2 border-none p-6 font-bold cursor-pointer text-lg text-zinc-900 ${
            isActiveConversations ? 'bg-gray-400' : 'bg-gray-200 hover:bg-gray-400'
          }`}
        >
          Conversations
        </button>
        <button
          onClick={activateContacts}
          className={`w-1/2 border-none p-6 font-bold cursor-pointer text-lg text-zinc-900 ${
            isActiveContacts ? 'bg-gray-400' : 'bg-gray-200 hover:bg-gray-400'
          }`}
        >
          Contacts
        </button>
      </div>
      {isActiveConversations ? <Conversations /> : <Contacts />}
      <div className='text-gray-200 w-full mt-auto mb-2 ml-2'>
        Your Id: <span>{id}</span>
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className='border-none text-zinc-900 w-auto flex items-center justify-center bg-gray-200 p-2 font-semibold text-2xl cursor-pointer hover:bg-gray-400'
      >
        New {isActiveConversations ? "Conversation" : "Contact"}
      </button>
      {modalOpen && (
        <Modal>
          {isActiveConversations ? (
            <NewConversationModal closeModal={closeModal}/>
          ) : (
            <NewContactModal closeModal={closeModal}/>
          )}
        </Modal>
      )}
    </div>
  );
}

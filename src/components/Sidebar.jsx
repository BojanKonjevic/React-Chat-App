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
    <div className='w-1/5 flex flex-col bg-primary text-lightGray'>
      <div className='p-4 flex justify-between'>
        <div className='flex w-1/2 items-center gap-2'>
          <div className='w-12 h-12 rounded-full pfp min-w-12'/>
            <p>
              Your Id: <span>{id}</span>
            </p>
        </div>
        <button className='bg-inherit border-none cursor-pointer p-0 m-0 text-orange'>Log Out</button>
      </div>
      <div className='buttonsDiv w-full m-0 p-0'>
        <button
          onClick={activateConversations} style={{borderBottom:`3px solid #1F232A`}}
          className={`w-1/2 border-none p-6 font-bold cursor-pointer text-lg text-lightGray ${
            isActiveConversations ? 'bg-darker' : 'bg-lighter hover:bg-darker'
          }`}
        >
          Conversations
        </button>
        <button
          onClick={activateContacts} style={{borderBottom:`3px solid #1F232A`}}
          className={`w-1/2 border-none p-6 font-bold cursor-pointer text-lg text-lightGray ${
            isActiveContacts ? 'bg-darker' : 'bg-lighter hover:bg-darker'
          }`}
        >
          Contacts
        </button>
      </div>
      {isActiveConversations ? <Conversations /> : <Contacts />}
      <button
        onClick={() => setModalOpen(true)}
        className='border-none mt-auto text-lightGray w-auto flex items-center justify-center bg-lighter p-2 font-semibold text-2xl cursor-pointer hover:bg-darker'
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

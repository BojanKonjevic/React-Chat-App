import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useConversations } from '../Contexts/ConversationsProvider';

export default function OpenConversation() {
  const [text, setText] = useState('');
  const { sendMessage, selectedConversation } = useConversations();
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedConversation.messages]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text === '') return;
    sendMessage(selectedConversation.recipients.map((r) => r.id), text);
    setText('');
    textareaRef.current.focus();
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className='flex flex-col bg-darkest text-white items-center justify-end p-4 flex-shrink-0 max-h-screen' style={{ width: '80%' }}>
      <div className='w-11/12 overflow-y-auto' style={{ scrollbarWidth: 'thin', scrollbarColor: '#252A33 #121212' }}>
        <div className='flex flex-col items-start justify-end mr-4'>
          {selectedConversation.messages.map((message, index) => {
            return (
              <div  style={{ maxWidth: '55%', overflowWrap: "break-word" }}  key={index} className={`flex max-w-full flex-col mt-4 ${message.fromMe ? 'self-end items-end' : 'items-start'}`}>
                <div className={`max-w-full rounded-md p-2 ${message.fromMe ? 'bg-blue' : 'bg-green'}`}>{message.text}</div>
                <div className={`text-lightGray mt-2 ${message.fromMe ? 'text-right' : ''}`}>{message.fromMe ? 'You' : message.senderName}</div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form className='w-11/12 flex mt-4' onSubmit={handleSubmit}>
        <textarea
          onKeyDown={handleKeyDown}
          ref={textareaRef}
          className='w-full text-lg border-none bg-primary text-lightGray p-2 outline-none'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#4F5460 #252A33', resize: "none"}}
        ></textarea>
        <button className='bg-blue border-none text-lg text-lightGray font-bold py-3 px-8 rounded-r hover:bg-blue-600 focus:outline-none cursor-pointer'>
          Send
        </button>
      </form>
    </div>
  );
}

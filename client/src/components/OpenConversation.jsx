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
    <div className='flex flex-col text-white items-center justify-end p-4 flex-shrink-0 max-h-screen' style={{ width: '80%' }}>
      <div className='w-11/12 overflow-y-auto'>
        <div className='flex flex-col items-start justify-end mr-4'>
          {selectedConversation.messages.map((message, index) => {
            return (
              <div key={index} className={`flex flex-col ${message.fromMe ? 'self-end' : ''}`}>
                <div className={`flex text-wrap rounded-md px-2 py-1 ${message.fromMe ? 'bg-blue-400' : 'border'}`}>{message.text}</div>
                <div className={`text-gray-400 ${message.fromMe ? 'text-right' : ''}`}>{message.fromMe ? 'You' : message.senderName}</div>
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
          className='w-full overflow-y-scroll text-lg border-none'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}
        ></textarea>
        <button className='bg-blue-500 border-none text-lg text-gray-200 font-semibold py-3 px-8 rounded-r hover:bg-blue-600 focus:outline-none cursor-pointer'>
          Send
        </button>
      </form>
    </div>
  );
}

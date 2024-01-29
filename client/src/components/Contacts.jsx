import React from 'react';
import { useContacts } from '../Contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ul className='text-white w-full'>
      {contacts.map(c => (
        <li className='w-auto text-lg p-4' key={c.id} style={{borderBottom:`1px solid rgb(229 231 235)`}}>{c.name}</li>
      ))}
    </ul>
  );
}

import React from 'react';
import { useContacts } from '../Contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ul className='text-lightgray w-full overflow-auto'>
      {contacts.map(c => (
        <li className='w-auto text-lg p-4' key={c.id} style={{borderBottom:`3px solid #1F232A`}}>{c.name}</li>
      ))}
    </ul>
  );
}

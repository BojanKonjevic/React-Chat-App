import React from 'react'
import { useId } from 'react';
import { useRef } from 'react'

export default function Login({ onIdSubmit }) {

    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }
    function createNewId(){
        onIdSubmit((new Date().getTime()));
    }

    return (
        <div>
            <form className='flex w-screen items-center justify-center flex-col' onSubmit={handleSubmit}>
                <h1 className='font-serif text-center'>Welcome to my chat app!</h1>
                <label htmlFor="idInput" className='mt-5 mb-2 font-serif font-semibold text-xl'>Enter Your Id</label>
                <input type="text" id='idInput' ref={idRef} required className='w-3/4 max-w-96 h-6 border-none focus:outline-none p-2 rounded-l' />
                <div className='btnsDiv w-3/4 max-w-96 mt-4 flex justify-between'>
                    <button type='submit' className='mr-6 text-white bg-blue-500 py-2 px-6 rounded-xl border-none ml-0 cursor-pointer'>Login</button>
                    <button onClick={createNewId} type='button' className='text-white bg-green-500 py-2 px-6 rounded-xl border-none ml-0 cursor-pointer'>Create A New ID</button>
                </div>
            </form>
        </div>
    )
} 

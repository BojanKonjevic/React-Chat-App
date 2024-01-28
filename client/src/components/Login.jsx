import React from 'react';
import { useRef } from 'react';

export default function Login({ onIdSubmit }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(new Date().getTime());
    }

    return (
        <div className='loginBackground flex h-screen w-screen items-center justify-center flex-col'>
            <form className='flex items-center justify-center flex-col text-gray-200 bg-gray-800/50 p-10 rounded-2xl shadow-md'>
                <h1 className='font-serif text-center text-2xl mb-4'>Welcome to Σ Chat! 🗿</h1>
                <label htmlFor="idInput" className='mb-2 font-serif font-semibold text-xl'>Please Enter Your Id</label>
                <div className='flex w-full max-w-md'>
                    <input
                        type="text"
                        id='idInput'
                        ref={idRef}
                        required
                        className='w-full border-none focus:outline-none p-2 rounded-l bg-gray-200 text-zinc-600'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 border-none text-gray-200 font-semibold py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none cursor-pointer'
                    >
                        Login
                    </button>
                </div>
                <div className='mt-4'>
                    <button
                        onClick={createNewId}
                        type='button'
                        className='bg-green-500 text-gray-200 font-semibold py-2 px-6 rounded hover:bg-green-600 focus:outline-none cursor-pointer border-none'
                    >
                        Create A New ID
                    </button>
                </div>
            </form>
        </div>
    );
}

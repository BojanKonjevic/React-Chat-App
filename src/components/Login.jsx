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
            <form className='flex items-center justify-center flex-col text-lightGray bg-gray-900/50 p-14 rounded-2xl shadow-md'>
                <h1 className='font-serif text-center text-4xl mb-6'>Welcome to Σ Chat! 🗿</h1>
                <label htmlFor="idInput" className='mb-4 font-serif font-semibold text-xl'>Please Enter Your Id</label>
                <div className='flex w-full max-w-md'>
                    <input
                        type="text"
                        id='idInput'
                        ref={idRef}
                        required
                        className='w-full border-none focus:outline-none p-4 text-xl rounded-l bg-lightGray text-zinc-600'
                    />
                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='bg-blue border-none text-lg text-lightGray font-semibold py-3 px-8 rounded-r hover:bg-blue-600 focus:outline-none cursor-pointer'
                    >
                        Login
                    </button>
                </div>
                <div className='mt-6'>
                    <button
                        onClick={createNewId}
                        type='button'
                        className='bg-green text-lightGray font-semibold py-4 px-9 text-lg rounded hover:bg-green-600 focus:outline-none cursor-pointer border-none'
                    >
                        Create A New ID
                    </button>
                </div>
            </form>
        </div>
    );
}

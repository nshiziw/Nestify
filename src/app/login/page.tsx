"use client";
import Link from 'next/link';
import React from 'react'
// import { Store } from 'react-notifications-component'

const Page = () => {

    const handleLogin = () => {

    }

    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <form onSubmit={handleLogin} className='shadow-lg bg-slate-100 p-4 rounded-md flex flex-col gap-2 w-2/6'>
                <h1 className='font-bold uppercase text-center text-2xl text-teal-600'>Nestify | Login</h1>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-base' htmlFor='email'>Email</label>
                    <input placeholder='Enter email here' className='outline-none focus:ring-2 focus:ring-teal-400 border py-2 px-4 rounded-sm border-teal-800 transition-all duration-300' type='email' id='email' name='email' required />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-base' htmlFor='password'>Password</label>
                    <input placeholder='Enter password here' className='outline-none focus:ring-2 focus:ring-teal-400 border py-2 px-4 rounded-sm border-teal-800 transition-all duration-300' type='password' id='password' name='password' required />
                </div>
                <button className='bg-teal-500 text-teal-50 w-fit m-auto py-2 px-5 rounded-md hover:bg-teal-700 transition-all duration-500 uppercase' type='submit'>Log In</button>
                <p>Don&apos;t have account? <Link className='text-teal-500 hover:underline' href="/signup">Sign Up</Link></p>
            </form>
        </section>
    )
}

export default Page
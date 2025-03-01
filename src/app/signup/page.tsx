"use client";
import Link from 'next/link';
import React from 'react'
// import { Store } from 'react-notifications-component'

const Page = () => {

    const handleSignup = () => {

    }

    return (
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <form onSubmit={handleSignup} className='shadow-lg bg-slate-100 p-4 rounded-md flex flex-col gap-2 w-2/6'>
                <h1 className='font-bold uppercase text-center text-2xl text-teal-600'>Nestify | Signup</h1>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-base' htmlFor='names'>Full Names</label>
                    <input placeholder='Enter full names here' className='outline-none focus:ring-2 focus:ring-teal-400 border py-2 px-4 rounded-sm border-teal-800 transition-all duration-300' type='text' id='names' name='names' required />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-base' htmlFor='email'>Email</label>
                    <input placeholder='Enter email here' className='outline-none focus:ring-2 focus:ring-teal-400 border py-2 px-4 rounded-sm border-teal-800 transition-all duration-300' type='email' id='email' name='email' required />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-base' htmlFor='password'>Password</label>
                    <input placeholder='Enter your password' className='outline-none focus:ring-2 focus:ring-teal-400 border py-2 px-4 rounded-sm border-teal-800 transition-all duration-300' type='password' id='password' name='password' required />
                </div>
                <button className='bg-teal-500 text-teal-50 w-fit m-auto py-2 px-5 rounded-md hover:bg-teal-700 transition-all duration-500 uppercase font-semibold' type='submit'>Sign Up</button>
                <p>Already have account? <Link className='text-teal-500 hover:underline' href="/login">Log In</Link></p>
            </form>
        </section>
    )
}

export default Page
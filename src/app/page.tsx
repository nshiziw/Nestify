"use client";
import React from 'react'
import Link from 'next/link'
import { Store } from 'react-notifications-component'

const Home = () => {

  const handleToast = () => {
    Store.addNotification({
      title: 'Success',
      message: 'Your toast has been shown!',
      type: 'success',
      insert: "top",
      container: 'bottom-right',
      dismiss: {
        duration: 3000,
        // onScreen: true
      },
    });
  };

  return (
    <div className='w-full h-fit flex flex-col items-center justify-center'>
      <h1>On this project am learning</h1>
      <p>Next.JS</p>
      <p>TypeScript</p>
      <Link href='/about'>About</Link>
      <Link href='/about/team'>Team</Link>
      <button onClick={handleToast}>Show Toast</button>
    </div>
  )
}

export default Home
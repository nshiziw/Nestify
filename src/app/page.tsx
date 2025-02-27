import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1>On this project am learning</h1>
      <p>Next.JS</p>
      <p>TypeScript</p>
      <Link href='/about'>About</Link>
      <Link href='/about/team'>Team</Link>
    </div>
  )
}

export default Home
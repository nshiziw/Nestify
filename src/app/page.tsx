import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Porsche from "../../public/porsche.png"

const Home = () => {
  return (
    <div className='w-full h-fit flex flex-col items-center justify-center'>
      <h1>On this project am learning</h1>
      <p>Next.JS</p>
      <p>TypeScript</p>
      <Link href='/about'>About</Link>
      <Link href='/about/team'>Team</Link>
      <Image src={Porsche} alt='' />
    </div>
  )
}

export default Home
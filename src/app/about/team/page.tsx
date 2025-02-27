import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Team',
    description: 'About the team members of our organization',
}

const page: React.FC = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <p>This page is in the about section and is about team members</p>
        </div>
    )
}

export default page
import React from 'react'

const page = () => {
    return (
        <section className='w-full h-screen flex flex-col items-center justify-center'>
            <form className='bg-teal-100'>
                <h1>Create account</h1>
                <div>
                    <label htmlFor="names">Full names</label>
                    <input type="text" name="names" placeholder='Enter your names...' id="" />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder='Enter your email...' id="" />
                </div>
                <div>
                    <label htmlFor="password">Full names</label>
                    <input type="password" name="password" placeholder='Enter your password...' id="" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    )
}

export default page
import Image from 'next/image'
import React from 'react'
import { FaBed, FaShower } from 'react-icons/fa'

const Page = () => {

    const Houses = [
        // each row must have; title, image, price, location, number of bedrooms, number of bathrooms, status(rent/sell)
        {
            title: 'Beautiful House',
            image: 'https://i.pinimg.com/736x/1d/7f/ee/1d7fee533036e49d3e1f824f004a5dbb.jpg',
            price: 250000,
            location: 'New York',
            bedrooms: 3,
            bathrooms: 2,
            status:'rent'
        },
        {
            title: 'Awesome Apartment',
            image: 'https://i.pinimg.com/736x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg',
            price: 150000,
            location: 'Los Angeles',
            bedrooms: 2,
            bathrooms: 1,
            status:'sell'
        },
        {
            title: 'Exquisite Villa',
            image: 'https://i.pinimg.com/736x/99/8d/9a/998d9aa0c2b1bb41aa611fa01d0d8289.jpg',
            price: 350000,
            location: 'Chicago',
            bedrooms: 4,
            bathrooms: 3,
            status:'sell'
        },
        {
            title: 'Nice Apartments',
            image: 'https://i.pinimg.com/736x/69/c7/86/69c786277bfbaf731b41770d641da5f6.jpg',
            price: 180000,
            location: 'San Francisco',
            bedrooms: 3,
            bathrooms: 2,
            status:'rent'
        }
    ]

    return (
        <section className='py-10 px-[5%] flex flex-col gap-20'>
            <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-3xl'>All Houses</h1>
                <p>This page showa all houses that are in the system, you have the ability to sort, filter and to search anything you want.</p>
            </div>
            <div className='grid grid-cols-7 gap-10'>
                <div className='col-span-2'>
                    {/* filter section */}
                </div>
                <div className='col-span-5'>
                    <div>
                        <div>
                            {/* search bar */}
                        </div>
                        <div>
                            {/* sort section */}
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        {Houses.map((House, index) => (
                            <div key={index} className='relative rounded-lg overflow-hidden'>
                                <Image className='w-full aspect-[3/2] object-cover' src={House.image} alt={House.title} width={500} height={500} loading='lazy' />
                                <p className={`w-fit text-sm py-1 px-3 rounded-sm text-teal-50 uppercase absolute top-2 right-2 ${House.status === 'rent' ? 'bg-sky-500' : 'bg-teal-500'}`}>{House.status}</p>
                                <div className='mt-2 flex justify-between items-center'>
                                    <p className='text-slate-700'>{House.location}</p>
                                    <div className='flex gap-3 items-center'>
                                        <div className='flex gap-1 items-center'>
                                            <FaBed className='text-teal-600' />
                                            <p>{House.bedrooms}</p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <FaShower className='text-teal-600' />
                                            <p>{House.bathrooms}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center text-slate-800'>
                                    <p>{House.title}</p>
                                    <p>{House.price}$</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
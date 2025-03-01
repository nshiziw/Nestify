import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaBed, FaShower } from 'react-icons/fa'

const Page = () => {

    const Houses = [
        // each row must have; title, image, price, location, number of bedrooms, number of bathrooms, status(rent/sell)
        {
            id: 1,
            title: 'Beautiful House',
            image: 'https://i.pinimg.com/736x/1d/7f/ee/1d7fee533036e49d3e1f824f004a5dbb.jpg',
            price: 250000,
            location: 'New York',
            bedrooms: 3,
            bathrooms: 2,
            status:'rent'
        },
        {
            id: 2,
            title: 'Awesome Apartment',
            image: 'https://i.pinimg.com/736x/46/9a/f7/469af73674363bdd1c5431f02254ab39.jpg',
            price: 150000,
            location: 'Los Angeles',
            bedrooms: 2,
            bathrooms: 1,
            status:'sell'
        },
        {
            id: 3,
            title: 'Exquisite Villa',
            image: 'https://i.pinimg.com/736x/99/8d/9a/998d9aa0c2b1bb41aa611fa01d0d8289.jpg',
            price: 350000,
            location: 'Chicago',
            bedrooms: 4,
            bathrooms: 3,
            status:'sell'
        },
        {
            id: 4,
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
            <div className='grid grid-cols-8 gap-10'>
                <div className='col-span-2 flex flex-col gap-10'>
                    {/* filter section */}
                    <h1 className='text-3xl font-bold'>Filter by:</h1>
                    <div>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Price</h1>
                            <div className='flex gap-2 items-center'>
                                <div className='flex flex-col'>
                                    <p>Minimum</p>
                                    <input className='border py-2 px-3 rounded-md w-full' type="number" placeholder='Min' id="" />
                                </div>
                                <p>-</p>
                                <div className='flex flex-col'>
                                    <p>Maximum</p>
                                    <input className='border py-2 px-3 rounded-md w-full' type="number" placeholder='Max' id="" />
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Location</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">New York</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">New York</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">New York</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">New York</label>
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>House Type</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="apartment" />
                                    <label htmlFor="apartment">Apartment</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">House</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">Condo</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">Villa</label>
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Bedrooms</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="1" />
                                    <label htmlFor="1">1</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">2</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">3</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">4</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">5</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">6</label>
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Bathrooms</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="1" />
                                    <label htmlFor="1">1</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">2</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">3</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">4</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">5</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">6</label>
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Area: Square meters</h1>
                            <div className='flex gap-2 items-center'>
                                <div className='flex flex-col'>
                                    <p>Minimum</p>
                                    <input className='border py-2 px-3 rounded-md w-full' type="number" placeholder='Min' id="" />
                                </div>
                                <p>-</p>
                                <div className='flex flex-col'>
                                    <p>Maximum</p>
                                    <input className='border py-2 px-3 rounded-md w-full' type="number" placeholder='Max' id="" />
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Nearby Amenities</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="apartment" />
                                    <label htmlFor="apartment">Train Station</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">Hospital</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">School</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">Shopping Mall</label>
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>Furniture</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="apartment" />
                                    <label htmlFor="apartment">Yes</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">No</label>
                                </div>
                            </div>
                        </form>
                        <form className='pb-6 border-b mt-10'>
                            <h1 className='text-xl font-semibold'>House Status</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="apartment" />
                                    <label htmlFor="apartment">Sell</label>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <input type="checkbox" id="newYork" />
                                    <label htmlFor="newYork">Rent</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-span-6'>
                    <div className='flex justify-between items-center'>
                        <form className='flex items-center gap-2'>
                            {/* search bar */}
                            <p>Search:</p>
                            <input placeholder='Type something...' className='border py-2 px-4 outline-none text-sm rounded-md border-s-teal-500 focus:ring-2 transition-all duration-500 focus:ring-teal-600' type="text" />
                            <CiSearch className='text-3xl hover:cursor-pointer text-teal-500' />
                        </form>
                        <form className='flex items-center gap-2'>
                            {/* sort section */}
                            <p>Sort by:</p>
                            <select className='border py-2 px-4 outline-none text-sm rounded-md border-s-teal-500 focus:ring-2 transition-all duration-500 focus:ring-teal-600'>
                                <option value="">Price: Low-High</option>
                                <option value="">Price: Hight-Low</option>
                                <option value="">Location</option>
                                <option value="">Date</option>
                                <option value="">Type</option>
                                <option value="">Area: Small-Large</option>
                                <option value="">Area: Large-Small</option>
                                <option value="">Bedrooms: Few-Many</option>
                                <option value="">Bedrooms: Many-Few</option>
                                <option value="">Bathrooms: Few-Many</option>
                                <option value="">Bathrooms: Many-Few</option>
                            </select>
                        </form>
                    </div>
                    <div className='grid grid-cols-3 gap-8 mt-4'>
                        {Houses.map((House, index) => (
                            <Link href={`/houses/${House.id}`} key={index} className='relative rounded-lg overflow-hidden'>
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
                            </Link>
                        ))}
                    </div>
                    <div>
                        {/* pagination */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
import Image from 'next/image'
import React from 'react'
import { Follower } from '../data/FollowersData'
import cover from '../public/cover.jpg'
import profile from '../public/profileImg.jpg'

const SideBar = () => {
  return (
    <div className='hidden  md:block col-span-2  '>
      {/* top section */}
      <div className='mx-1.5 rounded-xl cursor-pointer dark:bg-gray-900 border-2 dark:border-none'>
      <div className='bg-white rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none '>
            <div className='relative w-full  h-20'>
            <Image src={cover}  layout="fill" alt=''/>
            </div>
            <div  className='!h-14 !w-14   !absolute !-bottom-0  !border-2 !rounded-full !z-10 cursor-pointer ' >
            <Image src={profile} layout='intrinsic' className='rounded-full' />
            </div>
        </div>
        {/* Profile details */}
        <div className='flex flex-col mb-3 items-center space-y-4 my-3 px-4 text-center'>
            <span className='text-lg text-black dark:text-white font-semibold leading-3 -tracking-wider'>Sarah Williamson</span>
            <span className='text-sm text-gray-500 dark:text-white font-semibold leading-3 -tracking-wider'>@sarahwill</span>
            <span className='text-lg text-black dark:text-white font-semibold leading-3 -tracking-wider'>✨Beauty Lies in the inside✨</span>
            </div>
            {/* followers Sectionn */}
            <div className='flex space-x-5 my-4 border-y-2 dark:border-gray-500 justify-center text-center items-center'>
            <div className='flex flex-col px-3 border-r-2 dark:border-gray-500 items-center space-y-1.5'>
                <span className='text-black font-semibold dark:text-white'>6,664</span>
                <span className='text-gray-500 text-sm'>Following</span>
              </div>
              <div className='flex flex-col    items-center space-y-1.5'>
                <span className='text-black font-semibold dark:text-white'>6,664</span>
                <span className='text-gray-500 text-sm'>Following</span>
              </div>
            </div>
            <span className='text-blue-500 text-sm leading-3 hover:underline text-center flex justify-center pb-3'>My Profile</span>
      </div>
        {/* Who to Folllow */}
        <div className='mx-1.5 rounded-xl mt-4 px-2.8 py-1.5 cursor-pointer dark:bg-gray-900 border-2 dark:border-none'>
           <span className='text-lg mb-2 font-semibold text-black dark:text-white'>Who to follow</span>
           {Follower.map((list,id) => (
            <div className=' flex mb-4 items-center justify-center space-x-0.5' key={id}> 
              <Image src={list.image} width={45} height={45} objectFit='contain' alt='' />
              <span  className='text-center mb-4 text-xs font-bold'>{list.name}</span>
              <button className='bg-blue-600 mb-4 px-2 py-0.5 rounded-full text-white font-bold text-sm'>{list.button}</button>
            </div>
           ))}
           <span className='text-blue-600 hover:underline text-sm font-bold mb-4'>Show More</span>
      </div>
    </div>
  )
}

export default SideBar
import Image from 'next/image'
import React from 'react'
import profile from '../public/profileImg.jpg'
import { FcPicture} from 'react-icons/fc'

const PostSection = () => {
  return (
    <div className='col-span-5'>
      <div className='w-full flex space-x-2 items-center bg-gray-700 px-6 py-2'>
      <div  className='!h-14 !w-14 mr-3 !border-2 !rounded-full !z-10 cursor-pointer ' >
            <Image src={profile} layout='intrinsic' className='rounded-full' />
            </div>
        <div className='flex flex-1 pl-2 items-center'>
        <form className='flex flex-1 flex-col'>
          <input 
          className='px-4 bg-gray-600 rounded-lg w-full h-14 text-xl placeholder:text-xl bg-transparent border-none outline-none focus:outline-none hidden md:inline-flex'
           type="text" 
           placeholder='What happenng?' />
          <div className='flex flex-1 space-x-2 '>
            <FcPicture size={25} />
          </div>
          <button type="submit">Tweet</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default PostSection
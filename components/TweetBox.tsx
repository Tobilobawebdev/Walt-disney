import Image from 'next/image';
import React, { useState } from 'react'
import profile from '../public/profileImg.jpg';
import { BsImageFill, BsFillCalendarFill } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  return (
    <div  className="flex justify-center  rounded-xl bg-white border-gray-300 dark:bg-gray-900 space-x-2 p-5">
      <div className="mt-4 h-14 border-2 rounded-full w-14  object-cover">
      <Image 
        src={profile}
        className='rounded-full  pb-1.5'
        layout='intrinsic'
        alt="" />
      </div>
       
        <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            className="h-11 rounded-xl w-full bg-gray-400 text-white dark:bg-gray-800 px-2 text-lg outline-none placeholder:text-white dark:placeholder:text-black placeholder:text-lg"
          />
          <div className="flex mt-2 items-center ">
            <div className="flex flex-1 items-center space-x-4 ">
              <BsImageFill className='hover:scale-110 transition-all ease-in-out' size={22} color='darkgreen' />
              <AiFillPlayCircle className='hover:scale-110 transition-all ease-in-out' size={22} color='blue' />
              <MdLocationOn className='hover:scale-110 transition-all ease-in-out' size={22} color="red" />
              <BsFillCalendarFill className='hover:scale-110 transition-all ease-in-out' size={22} color="yellow" />
            </div>
            <button
            type='submit'
              disabled={!input }
              className="rounded-full bg-blue-600 px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          </form>
          </div>
    </div>
  )
}

export default TweetBox
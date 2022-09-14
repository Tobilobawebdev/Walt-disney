import Image from 'next/image';
import React, { useState } from 'react'
import profile from '../public/profileImg.jpg';
import image from '../assests/image.svg';
import gif from '../assests/gift.svg'
import poll from '../assests/poll.svg'
import schedule from '../assests/schedule.svg'
import video from '../assests/video.svg';

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  return (
    <div  className="flex justify-center  rounded-xl bg-gray-900 space-x-2 p-5">
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
            className="h-11 rounded-xl w-full bg-gray-800 px-2 text-lg outline-none placeholder:text-lg"
          />
          <div className="flex mt-2 items-center ">
            <div className="flex flex-1 space-x-2 ">
            <Image src={image} width={23} height={23} objectFit='contain' alt='' />
              <Image src={video} width={23} height={23} objectFit='contain' alt='' />
              <Image src={gif} width={23} height={23} objectFit='contain' alt='' />
              <Image src={poll} />
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
import Image from 'next/image'
import React from 'react'
import profile from '../public/profileImg.jpg'

const PostSection = () => {
  return (
    <div className='col-span-5'>
      <div className='w-full  bg-gray-700 px-6 py-2'>
        <Image src={profile} width={39} height={39} objectFit='contain' />
        <form>
          <input type="text" placeholder='What happenng?' />
          <div></div>
          <button type="submit">Tweet</button>
        </form>
      </div>
    </div>
  )
}

export default PostSection
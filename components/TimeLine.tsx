import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TimeLine = () => {
  return (
    <div className='col-span-2 hidden md:block !dark:bg-white !bg-black !dark:text-black !text-white !rounded-xl !dark:rounded-xl'>
      <TwitterTimelineEmbed
       sourceType="profile"
        screenName="omotade_joseph"
        options={{height: 1000}}
        />
    </div>
  )
}

export default TimeLine
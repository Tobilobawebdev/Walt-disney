import React from 'react';
import { FaSmileWink,
     FaSearch,
    FaRegBell } from 'react-icons/fa';
    import { useState, useEffect } from 'react';
    import { useTheme } from 'next-themes'
    import { BiMessageSquareDetail, BiHomeAlt} from 'react-icons/bi'
    import { BsTwitter } from 'react-icons/bs'
    import { AiFillHome } from 'react-icons/ai'
    import { CgMenuGridO } from 'react-icons/cg'
    import  profile from '../public/profileImg.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};

const style = {
    wrapper: 'w-full cursor-pointer  dark:text-white text-black justify-center border-2 dark:border-0 flex justify-between items-center sticky top-0px-3 py-1.5 focus-within:shadow-lg',
    leftWrap: 'flex items-center p-4',
    inputWrap: "md:flex items-center hidden text-gray-600 space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded-lg ml-2 w-full",
    input: ' px-4 bg-transparent border-none outline-none focus:outline-none hidden md:inline-flex',
}

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme()

    //after the app as mounted
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
      }
  return (
    <header className={style.wrapper}>
        <div className=' lg:hidden block '>
            <Image
                className='rounded-full lg:hidden block overflow-hidden'
                 src={profile} 
                 height={25} 
                 width={25} 
                 objectFit='contain'
                  alt='' />
        </div>
        <div className={style.leftWrap}>
            <BsTwitter className='text-blue-600' size={34} />
            <div className={style.inputWrap}>
                <FaSearch size={15}/>
                <input type="text"
                className={style.input}
                 placeholder='Whats happening'/>
            </div>
        </div>
        {/* right navMenu */}
        <div className='md:flex hidden  space-x-5 text-black dark:text-gray-300 items-center'>
            <div className='flex space-x-3 shrink h-fit w-fit text-xs font-bold  dark:text-gray-800 text-white rounded-full p-1 bg-black dark:bg-white'>
                <AiFillHome className='text-blue-600' size={20} />
                <span>Home</span>
            </div>
            <BiMessageSquareDetail size={20} />
            <FaRegBell />
            {/* profile section */}
            <section className='md:flex hidden space-x-3 shrink h-fit w-fit text-xs font-bold  dark:text-gray-800 text-white rounded-full p-1 bg-black dark:bg-white'>
                <Image
                className='rounded-full overflow-hidden'
                 src={profile} 
                 height={25} 
                 width={25} 
                 objectFit='contain'
                  alt='' />
                <span className='pt-0.5'>Sarah Williamson</span>
            </section>
            <CgMenuGridO size={20} />
            {/* dark mode toggle */}
            {mounted && (
                <div 
                className={`bg-gray-600 md:flex relative hidden flex-shrink-0 h-6 w-[46px] items-center px-0.5 space-x-3 rounded-full 
                ${resolvedTheme === 'dark' ? "justify-end" : "absolute left-0"}`}
                onClick={() =>setTheme(resolvedTheme === "dark" ? "light" : "dark")} >
                    <motion.div className='w-5 h-5 bg-white rounded-full z-40' 
                    layout
                     transition={spring}/>
                </div>
            )}
            
        </div>
    </header>
  )
}

export default Header
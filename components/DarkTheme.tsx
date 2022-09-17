import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};

export const DarkTheme = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme()

    //after the app as mounted
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return null
      }
  return (
    <div>
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
  )
}

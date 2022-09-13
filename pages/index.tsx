import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostSection from '../components/PostSection'
import SideBar from '../components/SideBar'
import TimeLine from '../components/TimeLine'

const Home: NextPage = () => {
  return (
    <div className='bg-[#f3f2ef] dark:bg-black dark:text-white h-screen overflow-y-hidden md:space-y-6'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
      <Header />
      <section className='grid mx-auto mt-3 gap-3 grid-cols-9'>
        {/* sidebar */}
        <SideBar />
         {/*post */}
         <PostSection />
          {/* tweet */}
          <TimeLine />
      </section>
     </main>
    </div>
  )
}

export default Home

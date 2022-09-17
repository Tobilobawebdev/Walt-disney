import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import PostSection from '../components/PostSection'
import SideBar from '../components/SideBar'
import TimeLine from '../components/TimeLine'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweet'

interface Props {
  tweets: Tweet[]
}

const Home = ({tweets}: Props) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
const tweets = await fetchTweets()
  return {
    props: {
       tweets,
    },
  }
}
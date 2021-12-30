import Head from 'next/head'
import Header from '../components/Landing/Header'
import Navbar from '../components/Landing/Header/Navbar'
import { Btn } from '../components/styledComponents'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ShipUp | Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className='flex flex-col justify-between gap-16 min-h-screen relative py-10'>
        <img src="/images/animate.svg"
          className=' absolute z-0 top-0 -left-8' />
        <Navbar />
        <Header />
        <form className='container flex gap-8 w-full rounded-2xl shadow-lg py-8 !px-8'>
          <fieldset className='p-2 w-full rounded-md border focus-within:shadow-xl'>
            <legend className='px-2 opacity-80 font-semibold'>Origin</legend>
            <input placeholder='Select Location' className='px-3 py-1.5 w-full' />
          </fieldset>
          <fieldset className='p-2 w-full rounded-md border focus-within:shadow-xl'>
          <legend className='px-2 opacity-80 font-semibold'>Destination</legend>
            <input placeholder='Select Location' className='px-3 py-1.5 w-full' />
          </fieldset>
          <fieldset className='p-2 w-full rounded-md border focus-within:shadow-xl'>
          <legend className='px-2 opacity-80 font-semibold'>Weight</legend>
            <input placeholder='Select Location' className='px-3 py-1.5 w-full' />
          </fieldset>
          <Btn primary className='w-9/12'>Check Price</Btn>
        </form>

      </header>

      <main>

      </main>

      <footer>

      </footer>
    </div>
  )
}

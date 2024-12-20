import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  
  if (!isMenuOpen) return null
  return (
    <div className='p-3 w-[15%] flex flex-col'>
      <div className=''>
        <ul className='space-y-3'>
          <li className='flex items-center gap-4 text-2xl'><IoMdHome /> <span className='text-lg'>Home</span></li>
          <li className='flex items-center gap-4 text-2xl'><SiYoutubeshorts /><span className='text-lg'>Shorts</span></li>
          <li className='flex items-center gap-4 text-2xl'><MdSubscriptions /> <span className='text-lg'>Subscriptions</span> </li>
        </ul>
      </div>
      <div className='border border-b-0 mt-6'></div>
      <div className=''>
        <ul className='space-y-3'>
          <li className='flex items-center gap-4 text-2xl'><IoMdHome /> <span className='text-lg'>Home</span></li>
          <li className='flex items-center gap-4 text-2xl'><SiYoutubeshorts /><span className='text-lg'>Shorts</span></li>
          <li className='flex items-center gap-4 text-2xl'><MdSubscriptions /> <span className='text-lg'>Subscriptions</span> </li>
        </ul>
      </div>
      <div className='border border-b-0 mt-6'></div>
      <div className=''>
        <ul className='space-y-3'>
          <li className='flex items-center gap-4 text-2xl'><IoMdHome /> <span className='text-lg'>Home</span></li>
          <li className='flex items-center gap-4 text-2xl'><SiYoutubeshorts /><span className='text-lg'>Shorts</span></li>
          <li className='flex items-center gap-4 text-2xl'><MdSubscriptions /> <span className='text-lg'>Subscriptions</span> </li>
        </ul>
      </div>
      <div className='border border-b-0 mt-6'></div>
    
    </div>
  )
}

export default Sidebar

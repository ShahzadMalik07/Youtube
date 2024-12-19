import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()
  const toggleMenuHanlder = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex  col-span-1'>
        <img onClick={()=>toggleMenuHanlder()} className='cursor-pointer h-8 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="" />
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KRtbf-83xJNHBd-E6LBkyBWwe1_pbqv9pA&s" alt="" />
      </div>
      <div className='col-span-10 text-center'>
        <input className='rounded-l-full w-1/2 border py-2 px-3 outline-none border-gray-400' type="text" name="" id="" />
        <button className='bg-gray-100 rounded-r-full border border-gray-400 p-2 px-5'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />
      </div>
    </div>
  )
}

export default Head

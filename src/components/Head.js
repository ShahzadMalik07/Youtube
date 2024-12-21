import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SUGGESTION_API } from '../utils/constant'
import SearchIcon from './SearchIcon'


const Head = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions()
    }, 400);

    return () => {
      clearTimeout(timer)
    }


  }, [searchQuery])


  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery)
    const json = await data.json()
    setSuggestions(json[1])
 
  }



  const dispatch = useDispatch()
  const toggleMenuHanlder = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-4 m-1  shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHanlder()} className='cursor-pointer h-8 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="" />
        <img className='cursor-pointer h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KRtbf-83xJNHBd-E6LBkyBWwe1_pbqv9pA&s" alt="" />
      </div>
      <div className='col-span-10 flex items-center justify-center  '>
        <div className='w-[45%] '>
          <input value={searchQuery} onBlur={()=>setShowSuggestions(false)} onFocus={()=>setShowSuggestions(true)} onChange={(e) => setSearchQuery(e.target.value)} className='rounded-l-full w-[100%] border py-2 pl-10  text-lg  outline-none border-gray-300' type="text" name="" id="" />
         { suggestions.length>1 && showSuggestions && <div className='fixed w-[527px] rounded-xl border border-gray-100 bg-white'>
            <ul className='pt-5 pb-2'>
              {suggestions.map((msg,index)=> <li key={index} className='flex items-center mb-1 gap-2 pl-2  hover:bg-gray-200  text-lg'><SearchIcon/> {msg}</li>)}
           
            
        
          </ul>
          </div>}
        </div>
        <button className=''><div className=" block fill-current border-t border-b border-r border-gray-300  rounded-r-full bg-[#F8F8F8] w-20 h-[45px] px-1 py-1"><svg className='mt-1' xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="22" focusable="false" aria-hidden="true" style={{
          pointerEvents: 'none',
          display: 'inherit',
          width: '85%',
          height: '85%'
        }}><path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path></svg></div>
        </button>

      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />
      </div>
    </div>
  )
}

export default Head

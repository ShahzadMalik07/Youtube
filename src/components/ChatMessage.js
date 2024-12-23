import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-2'>
       <img className='w-7 h-7 mt-1 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />
      <h2 className='text-gray-500 text-sm'>{name}</h2>
      <p className='text-sm'>{message}</p>
    </div>
  )
}

export default ChatMessage

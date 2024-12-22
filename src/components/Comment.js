import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies } = data
    return (
        <div className='  p-2 flex items-center space-y-2'>
            <div>
                <img className='w-10 h-10 mt-1 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />
            </div>
            <div className='px-2 '>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
                
            </div>


        </div>
    )
}

export default Comment

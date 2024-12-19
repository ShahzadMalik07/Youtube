import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-2 py-1.5 bg-gray-200 rounded-lg font-semibold'>{name}</button>
    </div>
  )
}

export default Button

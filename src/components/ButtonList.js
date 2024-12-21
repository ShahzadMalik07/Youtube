import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonList = ["All","News","Sports","Cricket","Romantic","Soccer","Badminton","Posdcast","Music","JavaScript","React","Television","Sports","Cricket","Romantic","Soccer","Badminton"]
  return (
    <div className='m-2 flex gap-3'>
     {buttonList.map((name,index)=><Button key={index} name={name}/>)}
    </div>
  )
}

export default ButtonList

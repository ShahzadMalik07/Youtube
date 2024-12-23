import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateName } from '../utils/helper'

const LiveChat = () => {


    const [inputMessage, setinputMessage] = useState("")

    const dispatch = useDispatch()
    const LiveMessages = useSelector(store => store.chat.messages)
  


    useEffect(() => {
        const intervel = setInterval(() => {
            dispatch(addMessages({ name: generateName(), message: "heelo megg is this new1" }))


        }, 2000)


        return () => {
            clearInterval(intervel)
        }



    }, [])


    return (
        <div className=''>

            <div className='space-y-2 ml-2 w-[450px] h-[500px] border border-gray-300 p-2 overflow-y-scroll flex flex-col-reverse'>
                {/* <h2 className='text-xl font-semibold'>Live Chat</h2> */}
                {LiveMessages.map((m, index) => <ChatMessage name={m.name} message={m.message} />)}

            </div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setinputMessage("")
               dispatch(addMessages({name:"Shahzad Malik",message:inputMessage}))
                }} className='w-[450px] flex items-center justify-center gap-2 ml-2 rounded-b-lg border-b border-l border-r border-gray-300 p-3'>
                <input value={inputMessage} onChange={(e)=>{setinputMessage(e.target.value)}} className='w-[250px] rounded-full outline-none px-4 py-2 bg-gray-100' placeholder='Chat...'  type="text" />
                <button className='px-3 py-1 bg-green-300 rounded-lg'>Submit</button>
            </form>


        </div>
    )
}

export default LiveChat

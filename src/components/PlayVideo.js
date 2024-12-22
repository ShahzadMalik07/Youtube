import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

const PlayVideo = () => {

  const [searchParams] = useSearchParams("v=")
  const param = searchParams.get("v")


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())

  }, [])
  return (
    <div className='p-4 ml-24 bg-white '>
      <iframe className='rounded-lg' width="880" height="500" src={"https://www.youtube.com/embed/" + param} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div>
        <CommentsContainer/>

      </div>
    </div>
  )
}

export default PlayVideo

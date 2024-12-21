import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const PlayVideo = () => {

  const [searchParams] = useSearchParams("v=")
  const param = searchParams.get("v")


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())

  }, [])
  return (
    <div className='p-4 ml-24 bg-white '>
      <iframe className='rounded-lg' width="880" height="500" src={"https://www.youtube.com/embed/"+param} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div></div>
    </div>
  )
}

export default PlayVideo

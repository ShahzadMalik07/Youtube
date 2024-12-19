import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constant'

const VideoContainer = () => {

  useEffect(()=>{
    getVideos()
  },[])

  const getVideos= async()=>{
    const videos = await fetch(YOUTUBE_API)
    const json = await videos.json()
    console.log(json)
  }
  return (
    <div>
      video container
    </div>
  )
}

export default VideoContainer

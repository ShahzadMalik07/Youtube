import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setvideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_API)
    const json = await videos.json()
    
    setvideos(json?.items)
    
  }
  console.log(videos)

  return (
    <div className='pl-1 flex flex-wrap items-center '>
      {videos?.map((videos,index)=><VideoCard info={videos}/>)}
     

    </div>
  )
}

export default VideoContainer

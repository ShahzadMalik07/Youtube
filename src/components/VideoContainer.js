import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const VideoContainer = () => {

  const [videos, setvideos] = useState([])
  const getvideoData = useSelector((store) => store.search)
  console.log(getvideoData[0])



  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const videos = await fetch(YOUTUBE_API)
    const json = await videos.json()

    setvideos(json?.items)
   
  }
  const videosToDisplay = getvideoData[0].length > 0 ? getvideoData : videos;


  return (
    <div className='pl-1 flex flex-wrap items-center '>
      {videosToDisplay?.map((videos, index) => {
        const videoId = videos.id?.videoId || videos?.id;

        return (
          <Link key={index} className=" w-[33%] " to={"/watch?v=" + videoId}>
            <VideoCard info={videos} /></Link>
        )
      })}



    </div>
  )
}

export default VideoContainer

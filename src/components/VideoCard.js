import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info
  const { thumbnails } = snippet
  console.log(info)

  return (
    <div className='mt-3 flex flex-col pt-4 px-1  w-[33%]'>
      <div className=''>
        <img className='h-[230px] w-[400px] rounded-md' src={thumbnails.medium.url} alt="" />
        </div>
      <div className='mt-1 flex items-center gap-2'>
        <img className='h-10 w-10 rounded-full bg-cover' src={thumbnails.high.url} alt="" />
        <h2 className='text-[17px] w-[80%] font-semibold'>{snippet.title}</h2>

      </div>
      <div className=' ml-[54px]'>
        
        <h3 className='text-gray-600'>{snippet.channelTitle}</h3>
        <div className='text-gray-600 flex items-center gap-1'>
          <h5>{statistics.viewCount} Views</h5>
          <div className='h-1 w-1 bg-gray-400 rounded-full'></div>
          <h5>14 years ago</h5>
        </div>
      </div>
    </div>
  )
}

export default VideoCard

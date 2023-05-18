import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoItem = ({video}) => {
  const navigate = useNavigate()

  const handleClick = async () => {
    const channelId = video.snippet.channelId
    navigate(`/channelDetail/${channelId}`)
  }

  return (
    <div className='border rounded-lg'>
      <div className="videoImg">
        <img src={`${video.snippet.thumbnails.high.url}`} alt="" />
      </div>
      <div className="videoHead text-center p-2">
        <h1 className='text-md'>{video.snippet.title}</h1>
        <h3 onClick={handleClick} className='text-sm cursor-pointer'>{video.snippet.channelTitle}</h3>
      </div>
    </div>
  )
}

export default VideoItem

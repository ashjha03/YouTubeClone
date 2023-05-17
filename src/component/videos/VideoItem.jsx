import React from 'react'

const VideoItem = ({video}) => {
  return (
    <div className='border rounded-lg'>
      <div className="videoImg">
        <img src={`${video.snippet.thumbnails.high.url}`} alt="" />
      </div>
      <div className="videoHead text-center p-2">
        <h1 className='text-md'>{video.snippet.title}</h1>
        <h3 className='text-sm'>{video.snippet.channelTitle}</h3>
      </div>
    </div>
  )
}

export default VideoItem

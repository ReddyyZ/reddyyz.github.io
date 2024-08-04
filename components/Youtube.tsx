import React from 'react'

interface YoutubeProps {
  videoId: string
}

const Youtube = ({ videoId }: YoutubeProps) => {
  return (
    <iframe
      className='w-full aspect-video'
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube Video"
      allowFullScreen
    ></iframe>
  )
}

export default Youtube;
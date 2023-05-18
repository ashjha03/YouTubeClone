import { useState, useEffect } from "react"
import fetchFromApi from "../../fetchFromAPI/fetchFromAPI"
import VideoItem from "../videos/VideoItem"

const SuggestedVideo = ({videoLink}) => {
  const requested_url = `search?relatedToVideoId=${videoLink}&part=id%2Csnippet&type=video&maxResults=5`
  const [videoList, setVideoList] = useState()

  const loadData = async () => {
    const data = await fetchFromApi(requested_url)
    setVideoList(data.items)
  }
  
  useEffect(() => {
    loadData()
  }, [])

  if(!videoList)  return <h1>Loading ...</h1>
  return (
    <div className="p-5 bg-[#272727] text-white overflow-scroll">
            {
            videoList.map(data => {
                return <VideoItem key={
                        data.snippet.title
                    }
                    video={data}/>
            })
        } </div>
  )
}

export default SuggestedVideo

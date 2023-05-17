import { useParams } from "react-router-dom"
import fetchSearchResults from "../fetchFromAPI/fetchSearchResults"
import { useState, useEffect } from "react"
import VideoItem from "../component/videos/VideoItem"

const SearchCategory = () => {
    const [VideoList, setVideoList] = useState([])
    const query = useParams().id
    const updateData = async () => {
      const data = await fetchSearchResults(query)
      setVideoList(data.items)
      console.log(VideoList)
  }
  useEffect(() => {
      updateData()
      // eslint-disable-next-line
  }, [query])
  
  if (!VideoList.length) 
        return <h1>Loading ....</h1>
    
    return (
        <div className="grid lg:grid-cols-4 gap-3 p-6 bg-[#272727] text-white">
            {
            VideoList.map(data => {
                return <VideoItem key={
                        data.snippet.title
                    }
                    video={data}/>
            })
        } </div>
    )
}

export default SearchCategory

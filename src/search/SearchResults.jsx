import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import fetchFromApi from "../fetchFromAPI/fetchFromAPI"
import VideoItem from "../component/videos/VideoItem"

const SearchResults = () => {
    const {id} = useParams()
    const [videoList, setVideoList] = useState()

    const loadData = async () => {
        const query = `search?q=${id}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`
        setVideoList(null)
        const data = await fetchFromApi(query)
        setVideoList(data.items)
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [])

    if(!videoList)  return <h1>Loading ...</h1>
  return (
    <div className="grid lg:grid-cols-4 gap-5 p-3 lg:pt-5 bg-[#272727] text-white">
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

export default SearchResults

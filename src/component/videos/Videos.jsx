import {useEffect, useState} from "react"
import fetchFromAPI from '../../fetchFromAPI/fetchFromAPI'
import VideoItem from "./VideoItem"

const Videos = () => {
    const [VideoList, setVideoList] = useState([])
    const requested_url = 'search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=5'

    const updateData = async () => {
        const data = await fetchFromAPI(requested_url)
        setVideoList(data.items)
    }
    useEffect(() => {
        updateData()
        // eslint-disable-next-line
    }, [])

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

export default Videos

import { useEffect, useState } from "react"
import fetchFromAPI from "../../fetchFromAPI/fetchFromAPI"
import { useParams } from "react-router-dom"
import VideoItem from "../videos/VideoItem"

const ChannelVideos = () => {
    const [VideoList, setVideoList] = useState([])
    const {id} = useParams()
    const requested_url = `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=10`

    const updateData = async () => {
        const data = await fetchFromAPI(requested_url)
        setVideoList(data.items)
        console.log(VideoList);
    }

    useEffect(() => {
        updateData()
        // eslint-disable-next-line
    }, [])

    if (!VideoList.length) 
    return <h1>Loading ....</h1>

return (
    <div className="grid lg:grid-cols-4 gap-3 p-6 bg-[#272727] text-white lg:px-12">
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

export default ChannelVideos

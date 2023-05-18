import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import fetchFromApi from "../../fetchFromAPI/fetchFromAPI";
import { AiFillLike } from "react-icons/ai";
import SuggestedVideo from "./SuggestedVideo";

const VideoPlayer = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const requested_url = `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;

  const loadVideoData = async () => {
    const data = await fetchFromApi(requested_url);
    console.log(data.items[0]);
    setVideoDetail(data.items[0]);
  };

  useEffect(() => {
    loadVideoData();
  }, []);

  if (!videoDetail) return <h1>Loading ...</h1>;
  return (
    <div className="p-4 bg-[#333] lg:flex text-[#f3f3f3]">
      <div className="videoPlay w-[70vw]">
        <ReactPlayer
            width='70vw'
            height='65vh'
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <div className="videoDetails py-4">
          <h1 className="text-xl pb-2">{videoDetail.snippet.title}</h1>
          <span className="like flex items-center bg-[#222] py-1 px-2 rounded-lg">
            <AiFillLike className="mr-1 text-xl" /> {videoDetail.statistics.likeCount} 
            <p className="pl-4">{videoDetail.statistics.viewCount} Views</p>
            <p className="pl-6">Published at : {videoDetail.snippet.publishedAt.substring(0, 10)}</p>
          </span>
          <div className="bg-[#222] mt-4 py-2 px-4 rounded-lg">
            <p>{videoDetail.snippet.description}</p>
          </div>
        </div>
      </div>
      <SuggestedVideo />
    </div>
  );
};

export default VideoPlayer;

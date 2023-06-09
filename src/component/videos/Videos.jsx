import { useEffect, useState } from "react";
import fetchFromAPI from "../../fetchFromAPI/fetchFromAPI";
import VideoItem from "./VideoItem";
import Spinner from "../../layout/Spinner";

const Videos = () => {
  const [VideoList, setVideoList] = useState([]);
  const requested_url =
    "search?relatedToVideoId=Z0hwjftStI4&part=id%2Csnippet&type=video&maxResults=10";

  const updateData = async () => {
    const data = await fetchFromAPI(requested_url);
    setVideoList(data.items);
  };

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  if (!VideoList) return <Spinner />;

  return (
    <div className="grid lg:grid-cols-4 gap-5 p-3 lg:pt-5 bg-[#272727] text-white">
      {VideoList.map((data) => {
        return <VideoItem key={data.snippet.title} video={data} />;
      })}{" "}
    </div>
  );
};

export default Videos;

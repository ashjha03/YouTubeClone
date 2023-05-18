import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromAPI from "../../fetchFromAPI/fetchFromAPI";
import ChannelVideos from "./ChannelVideos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelData, setChannelData] = useState();

  const getChannelData = async () => {
    const data = await fetchFromAPI(
      `channels?part=snippet%2Cstatistics&id=${id}`
    );
    setChannelData(data.items[0]);
  };

  useEffect(() => {
    getChannelData();
    // eslint-disable-next-line
  }, []);

  if (!channelData) return <h3>Loading ...</h3>;
  return (
    <>
      <div className="banner">
        <img
          src={channelData.brandingSettings.image !== undefined ? channelData.brandingSettings.image.bannerExternalUrl : "https://media.sellfy.com/images/LplUNYOg/GZvO45h1RrsFLUe02VQo/SwiftR.jpeg"}
          className="w-[100vw] h-[200px]"
          alt="Banner"
        />
      </div>
      <div className="bg-[#333] text-[#f3f3f3] lg:px-12 md:p-4 lg:py-5">
        <div className="channelDetail flex items-center p-4">
          <img
            src={channelData.snippet.thumbnails.high.url}
            className="w-[150px] rounded-full"
            alt="Channel"
          />
          <div className="channelHead ml-8">
            <h1 className="text-xl">{channelData.snippet.title}</h1>
            <div className="text-md lg:flex">
              <p className="">{channelData.snippet.customUrl} </p>
              <p className="lg:ml-4">
                {channelData.statistics.subscriberCount} Subscribers
              </p>
              <p className="lg:ml-4 ">
                {channelData.statistics.videoCount} Videos
              </p>
            </div>
          </div>
        </div>
        <p className="p-2">{channelData.snippet.description}</p>
      </div>
      <ChannelVideos />
    </>
  );
};

export default ChannelDetails;

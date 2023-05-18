import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VideoItem = ({ video }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const channelId = video.snippet.channelId;
    navigate(`/channelDetail/${channelId}`);
  };

  return (
    <div className="shadow-[#000] shadow-md rounded-lg mb-4 max-w-[90vw] overflow-hidden">
      <Link
        to={`/watchVideo/${video.id.videoId}`}
        className="videoImg rounded-lg"
      >
        <img
          className="rounded-lg"
          src={`${video.snippet.thumbnails.high.url}`}
          alt="Thumbnail"
        />
      </Link>
      <div className="videoHead text-center py-6 bg-[#333] rounded-lg">
        <h1 className="text-md text-[#f4f4f4]">{video.snippet.title}</h1>
        <h3 onClick={handleClick} className="cursor-pointer text-[#b2afaf] text-lg">
          {video.snippet.channelTitle}
        </h3>
      </div>
    </div>
  );
};

export default VideoItem;

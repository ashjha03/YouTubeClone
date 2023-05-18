import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./category/Category"
import Videos from "./component/videos/Videos"
import Navbar from "./layout/Navbar"
import SearchCategory from "./search/SearchCategory"
import ChannelDetails from "./component/channel/ChannelDetails"
import Footer from "./layout/Footer"
import VideoPlayer from "./component/videoPlayer/VideoPlayer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Category />
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/videos/:id" element={<SearchCategory />} />
        <Route path="/channelDetail/:id" element={<ChannelDetails />} />
        <Route path="/watchVideo/:id" element={<VideoPlayer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

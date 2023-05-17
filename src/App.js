import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./category/Category"
import Videos from "./component/videos/Videos"
import Navbar from "./layout/Navbar"
import SearchCategory from "./search/SearchCategory"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Category />
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="videos/*" element={<SearchCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

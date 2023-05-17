import { useParams } from "react-router-dom"

const SearchCategory = () => {
    const {query} = useParams()
  return (
    <div>
      <h1>search {query}</h1>
    </div>
  )
}

export default SearchCategory

import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchComponent () {
  const [query, setQuery] = useState('')
  const [isSearchClicked, setIsSearchClicked] = useState(false)

  const handleSearch = () => {
    setIsSearchClicked(true)
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <input class='form-control form-input' placeholder='Search anything...' type='text' value={query} onChange={handleInputChange} />
      <button onClick={handleSearch} class='btn btn-primary'>Search</button>
      {query && (
        <Link to={`${encodeURIComponent(query)}`}>
          {query}
        </Link>
      )}
      



      
    </div>
  )
}

export default SearchComponent

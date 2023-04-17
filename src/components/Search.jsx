import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SearchComponent () {
  const [query, setQuery] = useState('')
  const [tablaUYsuarios, setTablaUsuarios] = useState([])
  const [isSearchClicked, setIsSearchClicked] = useState(false)

  const handleSearch = () => {
    setIsSearchClicked(true)
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const getUsers = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setQuery(res.data)
        
        return res
      }).catch(err => {
        console.error(err)
      })
  }

  return (
    <div>
      <input class='form-control form-input' placeholder='Search anything...' type='text' value={query} onChange={handleInputChange} /><button onClick={handleSearch} class='btn btn-primary'>Search</button>
    </div>
  )
}

export default SearchComponent

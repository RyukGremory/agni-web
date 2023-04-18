import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'bootstrap'

function SearchComponent () {
  const [query, setQuery] = useState('')

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const getUsers = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setQuery(res.data)

        return res.data
      }).catch(err => {
        console.error(err)
      })
  }

  return (
    <div>
      <form>
        <input typeof='text' name='search' autoComplete='off' onChange={ev => handleInputChange(ev)} />
        <button>Buscar</button>
      </form>
      <div> <p>Resultado de la busqueda: </p>
        <p>{query}</p>
      </div>
    </div>
  )
}

export default SearchComponent

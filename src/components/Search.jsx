import { useState } from 'react'
import axios from 'axios'

const getUsers = async (query) => {
  await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.data
    }).catch(err => {
      console.error(err)
    })
}

function SearchComponent () {
  function handleOnsummitForm (event) {
    event.preventDefault()
    const searcvalue = event.target.search.value
    const users = getUsers(searcvalue)
  }
  function SearchButton (params) {
    return <button type='submit' name='' class='btn btn-outline-success'>Buscar</button>
  }

  function SearchBar () {
    const [query, setQuery] = useState('')

    const handleInputChange = (event) => {
      setQuery(event.target.value)
    }

    return (
      <div>
        <form class='d-flex' onSubmit={e => handleOnsummitForm(e)}>
          <input placeholder='Search' type='text' name='search' class='mr-2 form-control' value={query} onChange={e => handleInputChange(e)} />
          <br />
          <SearchButton />
        </form>
      </div>
    )
  }

  return (
    <div>
      <SearchBar />
      <p>Resultado de la busqueda: </p>
    </div>
  )
}

export default SearchComponent

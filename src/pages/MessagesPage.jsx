import { useParams } from 'react-router-dom'

function MessagesPage (params) {
  const { number } = useParams()

  return <h3>Estoy en los mensajes del numero {number}</h3>
}

export default MessagesPage

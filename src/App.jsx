import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navbar'
import MessagesSearchPage from './pages/MessagesSearchPage'
import EmailsSearchPage from './pages/EmailsSearchPage'
import MessagesPage from './pages/MessagesPage'
import EmailsPage from './pages/EmailsPage'
import ErrorsPage from './pages/ErrorsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const MessagesDetails = () => {
  return <div><h1>Detalle de Mensajes</h1></div>
}

function App () {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/messages' element={<MessagesSearchPage />} />
        <Route path='/messages/:number/' element={<MessagesPage />} />
        <Route path='/details' element={<MessagesDetails />} />
        <Route path='/emails/' element={<EmailsSearchPage />} />
        <Route path='/emails/:email' element={<EmailsPage />} />
        <Route path='/errors/' element={<ErrorsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

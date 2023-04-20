import { Routes, Route } from 'react-router-dom'
import 'soft-ui-dashboard/assets/css/soft-ui-dashboard.css'
import 'soft-ui-dashboard/assets/fonts/nucleo.ttf'
import MessagesSearchPage from './pages/MessagesSearchPage'
import EmailsSearchPage from './pages/EmailsSearchPage'
import ErrorsPage from './pages/ErrorsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Basepage from './components/common/Base'

function App () {
  return (

    <div className='App'>
      <Basepage />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/messages' element={<MessagesSearchPage />} />
        <Route path='/emails/' element={<EmailsSearchPage />} />
        <Route path='/errors/' element={<ErrorsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>

  )
}

export default App

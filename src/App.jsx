import './App.css'
import Navigation from './components/navbar'
import { Routes, Route, useParams, Outlet, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <h3>Estoy en casa</h3>
const Messages = () => <h3>Estoy en Mensajes</h3>
const MessagesMovil = () => {
  const { number } = useParams()
  return <div><h1>Estoy en Mensajes</h1> <h1><Link to="details" className="nav-link">{number}</Link></h1></div>

}
const MessagesDetails = () => {
  return <div><h1>Detalle de Mensajes</h1></div>
}
const Emails = () => <h3>Estoy en Email</h3>
const Errors = () => <h3>Estoy en Errores</h3>


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
     <Route path='/' element={ <Home />} />
     <Route path='/messages' element={ <Messages />}/>
        <Route path='/messages/:number/' element={<MessagesMovil />} />
           <Route path='/details' element={<MessagesDetails />} />
     <Route path='/emails/' element={<Emails />} />
      <Route path='/emails/:email' element={<Emails />} />
     <Route path='/errors/' element={<Errors />} />
      </Routes>
    </div>
  )
}

export default App

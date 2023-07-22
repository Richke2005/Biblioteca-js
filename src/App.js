import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import Home from './screens/home'
import Novidades from './screens/novidades'

function App() {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/novidades" element={<Novidades/>}/>
      </Routes>
    </Router>
    
  )
}
 

export default App
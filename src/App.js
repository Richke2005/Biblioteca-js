import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index'
import Home from './screens/home'
import Novidades from './screens/novidades'
import Footer  from './components/Footer/index'

function App() {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/novidades" element={<Novidades/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )
}
 

export default App
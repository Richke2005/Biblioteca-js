import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './patterns/Header/index.js'
import ButtonTop from './components/ButtonTop/index'
import Footer  from './components/Footer/index'
import Home from './screens/home'
import Novidades from './screens/novidades'
import Favoritos from './screens/favoritos'

const GlobalStyle = createGlobalStyle`
*{
   scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   overflow-x: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
  list-style: none;
}

a{
  list-style: none;
  text-decoration: none;
  color: black;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/novidades' element={<Novidades/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
      <ButtonTop/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

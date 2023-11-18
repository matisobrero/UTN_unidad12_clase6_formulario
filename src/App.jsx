import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Cuerpo from './Components/Cuerpo/Cuerpo'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Cuerpo></Cuerpo>
    <Footer></Footer>
    </>
  )
}

export default App

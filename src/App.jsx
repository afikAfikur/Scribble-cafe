import { useState } from 'react'
import Navber from './components/navber'
import './App.css'
import Blogs from './components/blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navber></Navber>

  <Blogs></Blogs>



    </>
  )
}

export default App

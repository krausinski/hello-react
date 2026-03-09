import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as d3 from "d3";


function App() {
  const [count, setCount] = useState(0)

  const data = [4, 8, 15, 16, 23, 42];
  console.log("The magic number derived as max is: ", d3.max(data));

  return (
    <>
      <div>
        <h2>👋 Hello, React! ⚛️</h2>
      </div>
    </>
  )
}

export default App

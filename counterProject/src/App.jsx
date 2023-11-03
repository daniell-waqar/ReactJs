import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  let [counter , setCounter] = useState(10)

  const Addvalue = () =>
  {
    
    if (counter < 20){
      setCounter(counter + 1)
    }
      
  }

  const Removevalue = () =>{

    if (counter > 0)
    setCounter(counter - 1)
  }
 

  return (
    <>
      <h1> Hello </h1>
      <h1> Counter is {counter} </h1>

      
      <button onClick={Addvalue}>Add Value </button>
      <br />

      <button onClick={Removevalue}> Remove Value</button>
    </>
  )
}

export default App

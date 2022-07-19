import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const on='./icons/on.svg'
  const off="./icons/off.svg"
  let [imgUrl, setimgUrl] = useState(on)

  function changeIcon(){
    if (imgUrl == on){
      setimgUrl(imgUrl= off)
    }
    else{
      setimgUrl(imgUrl= on)
    }
  }
  return (
    <div className="App">
        <h1>Mute Button</h1>
        <img src={imgUrl}  onClick={changeIcon}>
        </img>
    </div>
  )
}

export default App

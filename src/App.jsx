import React from 'react'
import './App.css'
import pads from './pads'
import Pad from './component/Pad/Pad'

function App() {

  const [isOn, setIsOn] = React.useState(pads)



   function toggle(id){
      setIsOn(prevIsOn => prevIsOn.map(content => 
      (
        content.id === id ? {...content, on : !content.on} : content
      )
      ))
   }
   

  return (
    <main>
      <div className="pad-container">
         {
          isOn.map(content => 
            <Pad
              key={content.id}
              id={content.id}
              color={content.color}
              on = {content.on}
              handleClick = {toggle}
            />
          )
         }
      </div>
    </main>
  )
}

export default App

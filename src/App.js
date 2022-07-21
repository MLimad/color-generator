import React, { useState } from 'react'
import './App.css';
import SingleColor from './SingleColor';
import Values from 'values.js'




function App() {

  const [color,setColor] = useState('');
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values("#E2E").all(10))


  const handleSubmit = (e) =>{
    e.preventDefault()
    
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      
    } catch (er) {
      setError(true)
    }
  }



  return (
    <div className="App">
          <section className='container'>
            <form onSubmit={handleSubmit}>
              <h1>Color generator</h1>
              <input 
              type="text"
              placeholder='#E2E'
              value={color}
              onChange={(e)=>setColor(e.target.value)}
              className={error ? "error" : "valid"}
               />
              <input type="submit" value="submit" />
            </form>
          </section>
          <section className='colors-list'>
            {
              list.map((color,index) => {

               return <SingleColor  key={index} {...color} colorHex={color.hex}  />
               


               })
            }
          </section>
    </div>
  );
}

export default App;

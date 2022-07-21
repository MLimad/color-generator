import React, { useEffect, useState } from 'react'


 function SingleColor({type,rgb,weight,colorHex}) {

  
  const [copied,setCopied] = useState(false)

  const bcrgb = rgb.join(",")
  const hexValue =`#${colorHex}`

  const handleClick =()=>{
    setCopied(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(()=>{

      const timeout = setTimeout(() => {
        setCopied(false)
      }, 500);

      return ()=> clearTimeout(timeout)

  },[copied])
 

  return (
    <>

    <div onClick={()=>handleClick()} className={type === "tint" ? "card-color  c-black":"card-color c-white"} 
    style={{backgroundColor : `rgb(${bcrgb})`}}>
      
      <div>
          <p>
          {weight}% <br />
          {hexValue}
          </p>
          {copied && <p className={type === "tint" ? "copied c-black": "copied c-white" }>Copied to clipboard</p>}
      </div>
    </div>
  

</>
  )
}


export default SingleColor

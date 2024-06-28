import React from 'react'

export default function TernaryOp() {

 
    let value1="right"
    let value2="left"
    const click=(value)=>{
        {value=="right"?alert("you have clicked the right button"):alert("you have clickd the left button")}
    }
  return (
    <div>
        
      <div>Ternaryoperator</div>
    <button onClick={()=>click("right")}>button 1</button>
    <button onClick={()=>click("left")}>button 2</button>

    </div>
  )
}

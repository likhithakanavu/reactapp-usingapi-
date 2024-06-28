import React,{useState} from 'react'

export default function Usestate() {
    // const [color, setColor] = useState("red");
    // const [count, setCount] = useState(0);

 const [color, setColor] = useState("red");

 const [count, setCount] = useState(0)

  return (
    <div>

   <h1>{count}</h1>

   <button onClick={()=>setCount(count+1)} > increament </button>



<h1 style={{color:color}} > {color} </h1>

     <button onClick={()=>setColor("blue")}> set state </button>







        {/* <h1 style={{color:color}}>{color}</h1>
      <button onClick={()=>setColor("blue")} >setState</button> */}

{/* <h1>{count}</h1>
<button onClick={()=>setCount(count+1)} > count++ </button>
<button onClick={()=>setCount(count-1)} > count-- </button> */}
    </div>

  )
}

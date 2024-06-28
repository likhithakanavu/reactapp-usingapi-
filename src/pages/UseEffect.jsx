import React, { useEffect, useState } from 'react'

export default function UseEffect() {


    useEffect(()=>{
        alert("Hello")
    },[])

    const [name , setName]=useState("abc");

    // useEffect(()=>{
    //     alert("hello")
    // },[])
    // dependency


    const [count,setCount]=useState(0);
    useEffect(()=>{
        // settime out is js buildin function 
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000);
});
  return (
    <div>
UseEffect
        {/* {name} */}
{count}
        {/* <button className="btn btn-warning" onClick={() => setName("Ragav")}>
        Change Name
      </button> */}
      
    </div>
  )
}

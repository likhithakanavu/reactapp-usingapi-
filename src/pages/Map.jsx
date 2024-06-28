import React from 'react'
import Header from '../component/header';

export default function Map() {
// using Array
    const ar = [10, 20, 30, 40];
    const ar1 = ["apple", "orange", "grapes", "mango"];

// using object 

const data = [
    { name: "ragav", age: 34 },
    { name: "tara", age: 25 },
    { name: "samanth", age: 46 },
  ];

  return (
    <div>

        <Header/>


        {ar.map((item, index) => {
        return <h1 >{item}</h1>;
      })}

{ data.map((i,index)=>{
    return (
        <><h1>{i.name}</h1>
        <h1>{i.age}</h1>
        </> 
    )
})}


    </div>
  )
}

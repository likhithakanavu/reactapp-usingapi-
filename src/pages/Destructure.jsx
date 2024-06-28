import React from 'react'

export default function Destructure() {

    const a = ["radha", 45, "jhon", "karl"];
    // array destructuring
    const [d, f, g, h] = a;
// Destructuring in programming is like a shortcut for grabbing specific pieces of information from arrays or objects. 


const obj = {
    name: "radha",
    age: 45,
    address: "mangalore",
  };
  //   object destructuring
  const { name, age, address } = obj;



  return (
    <div>
      {d}
      {address}
    </div>
  )
}

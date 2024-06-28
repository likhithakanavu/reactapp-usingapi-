import React from 'react'
import Header from '../component/header';

export default function ArowFuction() {
// variable 
    const a = 10;
    const s = "abc";
    // normal function
  function Arrow(){
    return <h1>hello</h1>
  }

    // single line arrow function
    const AddNumber = (a, b) => a + b;



     // arrow function with jsx multiple return statement
  const Hello1 = () => {
    return (
      <>
        <h1>hello</h1>  
        <p>hello</p>
      </>
    );
  };


  return (
    <div>

<Header/>

        {/* variable calling */}
      {a}
      {s}
{/*  to call function */}
{/* <Arrow/> */}

{/* {AddNumber(2,6)} */}



<Hello1/>

    </div>
  )
}

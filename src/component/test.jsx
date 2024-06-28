import React from 'react'
import './style.css';

export default function Test() {

    // // internal

    const my ={
        color:"red",
    }
 
  return (
    // External
    <div className='mystyle' >
      {/* internal */}
      <p style={my} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam, recusandae quisquam pariatur voluptatibus sit maiores corrupti, nostrum esse incidunt consequatur voluptatem, atque architecto neque! Dolores earum iure eligendi suscipit!</p> 
{/* inline */}
      <h1 style={{ color:"red" }}  > GOOD AFTERNOON </h1>






    </div>
  
   
  )
}

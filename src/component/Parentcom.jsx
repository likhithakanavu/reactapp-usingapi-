
import React from 'react'
import Childcom from './Childcom';
import Props from './Props';

export default function Parentcom() {

    const name="xyz"


   const items ={
    name:"abc",
    age:"20",
    email:"abc@gmail.com",
   }


    const book = [
        { id: 1233, bname: "damsel in distress", stock: 30, sales: 45,img:"https://th.bing.com/th?id=OIP.s6qkxOqsGKB_7JnvbKujWAHaE2&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
        { id: 1234, bname: "moth to flame", stock: 30, sales: 45,img:"https://th.bing.com/th?id=OIP.s6qkxOqsGKB_7JnvbKujWAHaE2&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", },
        { id: 1235, bname: "Billonaire", stock: 90, sales: 45,img:"https://th.bing.com/th?id=OIP.s6qkxOqsGKB_7JnvbKujWAHaE2&w=308&h=202&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", },
        { id: 1236, bname: "Ambrose", stock: 40, sales: 45 },
        { id: 1237, bname: "Hazel", stock: 80, sales: 45 },  // Ensure unique IDs
    ];

    return (
        <div>


{/* <Props name2={items} /> */}






            {book.map((item) => {
                return(
                    <div>
                    <Childcom key={item.id} book={item} />
                    </div>
                )
              
})}


        </div>
    )
}

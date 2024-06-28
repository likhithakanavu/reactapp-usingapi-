import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

export default function Es6() {
  return (
    <div>
        <Header/>
   <Link to="/Arrow">   <Button>
        Arrow Function
      </Button> </Link>
      <Link to="/map">   <Button>
      Map
      </Button> </Link>

      <Link to="/ter">   <Button>
      TernaryOp
      </Button> </Link>

    </div>
  )
}

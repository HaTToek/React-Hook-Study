import React from 'react'
import {Link} from 'react-router-dom'

var Nav = () =>{
  return (
    <>
      <Link to="/Counter">
        <button>Counter</button>
      </Link>
      <Link to="/Info">
        <button>Info</button>
      </Link>
    </>
  )
}


export default Nav
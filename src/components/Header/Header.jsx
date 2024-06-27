import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = (props) => {

  return (
    <header className="header">
        <Link to="/"><h1>Demik</h1></Link>
        <NavBar />
        <CartWidget numerito={props.numerito} />
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {

  const navStyle = {
    color: "#f13c20",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none"
  }

  const btnStyle = {
    background: "black",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    border: "1px solid grey",
    color: "#f13c20",
    borderRadius: "3px",
    height: "40px",
    marginRight: "12px",
    cursor: "pointer",
    width: "90px"
  }


  const demoName = {
    marginLeft: "7px"
  }

  return (
    <nav>
      <h1 style={demoName}>Nav here</h1>
      <ul className="nav__links">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/shop'>
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to='/products'>
          <li>Products</li>
        </Link>
        <Link style={navStyle} to='/users'>
          <li>Users</li>
        </Link>
        <Link style={navStyle} to='/gallery'>
          <li>Gallery</li>
        </Link>
      </ul>
      <div >
        <button style={btnStyle}>Sign in</button>
        <button style={btnStyle}>Sign up</button>
      </div>
    </nav>
  )
}


export default Nav
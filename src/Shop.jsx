import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'



const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


const StyledInput = styled.input`
  width: 120px;
  height: 30px;
  border: 1px solid green;
  margin: 5px 2px 0 0;
  padding-left: 5px;
  border-radius: 3px;
  
`

const StyledButton = styled.button`
  width: 70px;
  color: grey;
  cursor: pointer;
  height: 30px;
  border: 1.5px solid green;
  margin: 5px 2px 0 0;
  /* padding-left: 5px; */
  border-radius: 3px;
  :hover {
    background: black;
    color: red;
  }


`

const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Shop = ({ match }) => {
  const [items, setItems] = useState([])
  const [value, setValue] = useState("")
  const [body, setBody] = useState("")
  const [title, setTitle] = useState("")
  const [userId, setUser] = useState("")
  const [arr, setArr] = useState([])
  const [loading, setLoading] = useState(false)

  const shopStyle = {
    fontSize: "20px",
    color: 'black',
    // textDecoration: "none"
  }


  const fetchItems = useCallback(async () => {
    try {
      setLoading(true)
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      const items = await data.json()
      setLoading(false)
      setItems(items)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const fetchFiltered = async () => {
    setLoading(true)
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${value}`)
    const items = await data.json()
    setItems(items)
    setLoading(false)
  }

  const addPost = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      const response = await res.json()
      if (response) {
        setItems([...items, response])
        console.log('success')
      }
    } catch (err) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    fetchFiltered()
  }

  if (loading) {
    return (
      <StyledLoaderContainer>
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </StyledLoaderContainer>
    )
  }
  return (
    <StyledDiv>
      <div>
        {items.map(item => (
          <h1 key={item.id}>
            <Link style={shopStyle} to={`/shop/${item.id}`}>{item.title}</Link></h1>
        ))}
      </div>
      <div>
        <StyledInput value={value} placeholder="Enter Id here..." onChange={handleChange} />
        <StyledButton onClick={onClick}>Find id</StyledButton>
        <div>
          <input placeholder="title" onChange={(e) => setTitle(e.target.value)} type="text" />
          <input placeholder="body" onChange={(e) => setBody(e.target.value)} type="text" />
          <input placeholder="userId" onChange={(e) => setUser(e.target.value)} type="text" />
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
    </StyledDiv>
  )
}

export default Shop
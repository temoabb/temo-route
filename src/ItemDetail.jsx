import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import Users from '../src/Users.jsx'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* line-height: 20px; */
  border: 1px solid green;
  min-height: 150vh;
  background: #dbe1f1;
  color: #f13c20;
  font-size: 24px;
`

const commentsFont = {
  fontSize: "15px",
  color: "green"
}

const styledHeadings = {
  border: "1px solid grey",
  marginBottom: "10px",
  borderRadius: "3px",
  padding: "0px 6px",
}
const ItemDetail = ({ match }) => {

  useEffect(() => {
    fetchItem()
    fetchComments()
    console.log('match', match)
  }, [])

  const [item, setItem] = useState({})
  const [comments, setComments] = useState([])

  const fetchItem = async () => {
    const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
    const items = await fetched.json()
    console.log("type of items is", typeof items)
    setItem(items)
    console.log('items', items)
  }


  const fetchComments = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`, {
      headers: {
        mode: "no-cors"
      }
    })
    const result = await res.json()
    console.log('res', result)
    setComments(result)
  }

  return (
    <StyledDiv>
      <h1>View details:</h1>
      <h2>id: {item.id}</h2>
      <Link to={`/users/${item.userId}/albums`}><p>userId: {item.userId}</p></Link>
      <p>title: {item.title}</p>
      <p>body: {item.body}</p>
      <h2>Comments:</h2>
      <div style={commentsFont}>
        {comments.map(item => (
          <div style={styledHeadings}>
            <h3>Ps{item.postId}</h3>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <h3>{item.email}</h3>
            <h3>{item.body}</h3>
          </div>
        ))}
      </div>


    </StyledDiv>
  )

}

export default ItemDetail
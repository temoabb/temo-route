import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: 2px 0px 0px;
  padding: 5px 0px 5px 5px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 150px;
  color: brown;
  background: #FFE1BA;
  :hover {
    background: #dbafa8;
    box-shadow: 3px 4px 0px 0px grey;
    transition: 600ms;
  }


`
const Users = ({ match }) => {

  useEffect(() => {
    fetchAlbum()
    console.log("match", match)
  }, [])
  const [albums, setAlbums] = useState([])

  const fetchAlbum = async () => {
    const fetched = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.albumId}/albums`)
    const data = await fetched.json()
    setAlbums(data)
  }

  return (
    <div>
      {albums.map(item => (
        <StyledDiv>
          <Link to={`/albums/${item.id}/photos`}><h2>userId - {item.userId}</h2></Link>
          <h4>id - {item.id}</h4>
          <h4> title -{item.title}</h4>
        </StyledDiv>
      ))}
    </div>
  )
}

export default Users
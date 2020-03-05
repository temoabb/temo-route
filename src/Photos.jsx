import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  /* border: 1px solid grey; */
  margin: 2px 0px 0px;
  padding: 5px 0px 5px 5px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 300px;
  color: brown;
  background: #FFE1BA;
  :hover {
    background: #dbafa8;
    box-shadow: 8px 4px 0px 0px grey;
    transition: 600ms;
  }
`


const Photos = ({ match }) => {

  useEffect(() => {
    fetchPhotos()
    console.log("match", match)
  }, [])

  const [photos, setPhotos] = useState([])

  const fetchPhotos = async () => {
    const fetched = await fetch(`https://jsonplaceholder.typicode.com/albums/${match.params.photoId}/photos`)
    const data = await fetched.json()
    setPhotos(data)
  }

  return (
    <div>
      {photos.map(item => (
        <StyledDiv>
          <h2> Albumid- {item.albumId}</h2>
          <h3>Id- {item.id}</h3>
          <h4> title -{item.title}</h4>
          <h5> url -{item.url}</h5>
          <img src={item.thumbnailUrl} />
        </StyledDiv>
      ))}
    </div>
  )
}

export default Photos
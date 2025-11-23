import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

function ViewStory() {

  const {id} = useParams();

  const [stories, setStories] = useState(null);

  useEffect(()=>{
    fetch(`http://localhost:3000/stories/${id}`)
    .then(data => data.json())
    .then(data => setStories(data))
    .catch(err => console.log(err))
  },[]);
  return (
    <div>
      {stories? <div>{stories.user.username}</div> : <div>Loading</div>}
    </div>
  )
}

export default ViewStory
import React, { useEffect, useState } from 'react'
import { data,useParams } from 'react-router-dom'
import values from './assets/js/data';



function ViewStory() {

  const {id} = useParams();

  const [story, setStory] = useState(null);

  useEffect(()=>{
    setStory(values.story)
  },[]);
  return (
    <div>
      {story? <div>{story.user.username}</div> : <div>Loading</div>}
    </div>
  )
}

export default ViewStory
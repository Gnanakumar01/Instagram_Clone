import React, { useEffect, useState } from 'react'
import values from './assets/js/data';

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(()=>{
    setStories(values.story)
  },[]);

  return (
    <div className='stories d-flex'>
      {stories.length > 0 ?(
        stories.map((story)=>(
          <div key={story.id} className='mx-2'>
            <div className="gradient-border">
              <img src={story.user.userImage} alt="dp" className='story_dp rounded-circle'/>
            </div>
            
            <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
          </div>

        ))
      ):(
        <>
        <p>Loading</p>
        <div>jfhlsdj</div></>
      )}
    </div>
  )
}

export default Stories
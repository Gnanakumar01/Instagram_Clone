import React, { useEffect, useState } from 'react'
import values from './assets/js/data';

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(()=>{
    setStories(values.stories)
  },[]);

  return (
    <div className='stories d-flex'>
      {stories.length > 0 ?(
        stories.map((stories)=>(
          <div key={stories.id} className='mx-2'>
            <div className="gradient-border">
              <img src={stories.user.userImage} alt="dp" className='story_dp rounded-circle'/>
            </div>
            
            <p className='text-truncate' style={{width:"50px"}}>{stories.user.username}</p>
          </div>

        ))
      ):(
        <p>Loading</p>
      )}
    </div>
  )
}

export default Stories
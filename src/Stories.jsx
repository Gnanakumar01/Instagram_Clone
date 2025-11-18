import React, { useEffect, useState } from 'react'

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/stories')
    .then(data => data.json())
    .then(data => setStories(data))
    .catch(err => console.log(err))
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
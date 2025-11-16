import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/profile')
      .then(data => data.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err))

    fetch('http://localhost:3000/suggestions')
      .then(data => data.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err))

  }, []);

  return (
    <div>
      <div className='suggestions w-75 m-4'>
        {profile ?
          <div className='d-flex '>
            <img className='dp' src={profile.userImage} alt="" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-info'>Switch</small>
          </div>
          : <p>Loading</p>}

          <div className='d-flex'>
            <p>Suggested for you</p>
            <strong className='ms-auto'>see All</strong>
          </div>

             {suggestions.length > 0? (
            <div>
                {suggestions.map((suggestion)=>(
                    <div key={suggestion.id}>
                        <div className='d-flex justify-content-evenly'>
                            <img className='dp' src={suggestion.userImage} alt="" />
                            <h5>{suggestion.username}</h5>
                            <p className='text-info ms-auto'>Follow</p>
                        </div>
                    </div>
                ))}
            </div>
            ):(
            <div>Loding...</div>
            )}
            
      </div>
    </div>
  )
}

export default Suggestions
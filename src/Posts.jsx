import React, { useEffect, useState } from 'react'
import values from './assets/js/data'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        setPosts(values.posts)
    },[]);

  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0? (
            <div>
                {posts.map((post)=>(
                    <div className='my-3' key={post.id}>
                        <div className='d-flex'>
                            <img className='dp rounded-circle' src={post.user.userImage} alt="" />
                            <h5>{post.user.username}</h5>
                        </div>
                        <img className='post_image' src={post.postImage} alt="" />
                        <div>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <strong>{post.likes} Likes</strong>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
            ):(
            <div>Loding Posts</div>
            )}
    </div>
  )
}

export default Posts
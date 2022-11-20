import React from 'react'

export default function RecentPosts() {
  const data: Array<string> = []
  return (
    <div className='sidebar recent-posts'>
      <h1>Recent Posts</h1>
      {data.length>0
        ? <p>there are some posts</p>
        : <p>No recent posts.</p>
      }
    </div>
  )
}

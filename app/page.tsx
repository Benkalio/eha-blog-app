import React from 'react'
import BlogList from '../components/BlogList'

async function getPosts() {
  const res = await fetch('/pages/api/getPosts')

  if (!res.ok) { 
    console.log(res);
  } 
  return res.json()
}

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <div>
      <BlogList posts={posts} />
      <h1 className='text-4xl'></h1>
      <p></p>
    </div>
  )
}

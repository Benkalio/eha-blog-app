import React from 'react'
import BlogList from '../components/BlogList'

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)

  if (!res.ok) { 
    console.log(res);
  } 
  return res.json()
}

export default async function HomePage() {
  const data: { id: number; title: string }[] = await getPosts();
  return (
    <div>
      {/* <BlogList posts={posts} /> */}
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      <h1 className="text-4xl">Checking</h1>
      {/* {data.map((post) => (
        <div>
          <h2 className="text-lg py-6">{post.title}</h2>
          
        </div>
      ))} */}
      <p></p>
    </div>
  );
}

import React from 'react'
import { connect } from 'react-redux'
import BlogList from '../../components/BlogList'

export default function HomePage() {
  const posts: Post[] = [];
  return (
    <div>
      <BlogList posts={posts} />
      <h1 className='text-4xl'></h1>
      <p></p>
    </div>
  )
}

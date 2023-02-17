"use client"

import BlogList from './BlogList';

type Props = {
  query: string;
}

function PreviewblogList({ query }: Props) {
  const posts = []
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}

export default PreviewblogList

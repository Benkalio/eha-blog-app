"use client"

import axios from 'axios';
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import AddPost from './AddPost';
import Post from './Post';
import { PostsType } from './types/Posts';

const queryClient = new QueryClient();

async function allPosts() {
  const res = await axios(`${process.env.BASE_URL}/api/getPosts`);

  return res.data;
}

export default function HomePage() {
  const { data, error, isLoading } = useQuery<PostsType[]>({
    queryFn: allPosts,
    queryKey: ['posts'],
  });
  if (error) {
    return error
  };
  if (isLoading) {
    return 'Loading.....'
  };
  
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          comments={post.comments}
        />
      ))}
      {/* <BlogList posts={posts} /> */}
      {/* <h1 className="text-4xl">[data]</h1> */}
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
    </QueryClientProvider>
  );
}

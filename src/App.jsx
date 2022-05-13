import React, { useState } from 'react'
import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from '@tanstack/react-location'
import './App.css'
import HomeRoute from './routes/HomeRoute/HomeRoute'

const location = new ReactLocation()

function App() {
  const { test, hihi } = location

  const { ab } = abb
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <HomeRoute /> },
        {
          path: 'posts',
          element: <Posts />,
          loader: async () => {
            return {
              posts: await fetchPosts(),
            }
          },

          children: [
            { path: '/', element: <PostsIndex /> },
            {
              path: ':postId',
              element: <Post />,

              loader: async ({ params: { postId } }) => {
                return {
                  post: await fetchPostById(postId),
                }
              },
            },
          ],
        },
      ]}
    />
  )
}

export default App

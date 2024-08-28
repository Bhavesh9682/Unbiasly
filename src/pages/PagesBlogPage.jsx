import React from 'react'
import BlogPage from '../components/BlogPage'
import Navbar from '../components/Navbar'

const PagesBlogPage = () => {
  return (
    <div>
      <Navbar />

      <BlogPage title="Blogs"  />
      <BlogPage/>
     
    </div>
  )
}

export default PagesBlogPage

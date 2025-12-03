import React from 'react'
import BlogBackground from '../comopents/layout/BlogBackground'
import NatureWisdomHero from '../comopents/blog/NatureWisdomHero'
import OurBlog from '../comopents/blog/OurBlog'

function Blog() {
  return (
    <div>
      <BlogBackground>
        <NatureWisdomHero/>
        <OurBlog/>
      </BlogBackground>
    </div>
  )
}

export default Blog

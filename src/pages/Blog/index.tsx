import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { BlogContainer } from './style'

const Blog: React.FC = () => {
  return (
    <BlogContainer>
      <Header></Header>
      <h1>Blog</h1>
      <Footer></Footer>
    </BlogContainer>
  )
}

export default Blog

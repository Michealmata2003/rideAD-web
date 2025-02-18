import React from 'react'
import BlogHero from '../components/blog/BlogHero.jsx/BlogHero'
import News from '../components/blog/news/News'
import Editor from '../components/blog/editor/Editor'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'
import Policy from '../components/policy/Policy'
import Read from '../components/blog/news/Read'

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <News />
      <Read />
      <Editor />
      <NewsLetter />
      <Footer />
      <Policy />
      
    </div>
  )
}

export default Blog

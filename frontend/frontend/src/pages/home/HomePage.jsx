import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Article'
import CTA from './container/CTA'

function HomePage() {
  return (
    <MainLayout>
      <Hero/>
      <Articles/>
      <CTA/>
      
    </MainLayout>
  )
}

export default HomePage
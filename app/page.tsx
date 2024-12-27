import React from 'react'
import HeroSection from './_components/Hero'
import Welcome from './_components/Welcome'
import Banner from './_components/Banner'
import Service from './_components/Service'
import Menu from './_components/Menu'
import Blogs from './_components/Blogs'
import FeedBack from './_components/Feedback'

function page() {
  return (
    <>
    <HeroSection />
    <Welcome />
    <Banner />
    <Service />
    <Menu />
    <Blogs />
    <FeedBack/>
    </>
  )
}

export default page
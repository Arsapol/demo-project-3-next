import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Hero from '../components/hero'
import InfoSection from '../components/info-section'
import FeaturesGrid from '../components/features-grid'
import LogosBar from '../components/logos-bar'
import Footer from '../components/footer'

const LayoutComponents1 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>LayoutComponents1 - Demo Project 3</title>
          <meta
            name="description"
            content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
          />
          <meta property="og:title" content="LayoutComponents1 - Demo Project 3" />
          <meta
            property="og:description"
            content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
          />
          <meta
            property="og:image"
            content="https://storage.googleapis.com/playground-bucket.teleporthq.io/aea505021c3337abe2c72fce4ca172f1"
          />
        </Head>
        <span className="text">Layout Components</span>
        <div className="container01">
          <span className="text1">NavBar</span>
          <div className="container02">
            <NavBar></NavBar>
          </div>
        </div>
        <div className="container03">
          <span className="text2">Hero</span>
          <div className="container04">
            <Hero></Hero>
          </div>
        </div>
        <div className="container05">
          <span className="text3">Info Section</span>
          <div className="container06">
            <InfoSection></InfoSection>
          </div>
        </div>
        <div className="container07">
          <span className="text4">Grid Section</span>
          <div className="container08">
            <FeaturesGrid></FeaturesGrid>
          </div>
        </div>
        <div className="container09">
          <span className="text5">Logos Section</span>
          <div className="container10">
            <LogosBar></LogosBar>
          </div>
        </div>
        <div className="container11">
          <span className="text6">FooterSection</span>
          <div className="container12">
            <Footer></Footer>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: block;
            padding: 100px;
            overflow: auto;
            font-size: 16px;
            min-height: 100vh;
            font-family: 'Roboto';
            background-color: #fff;
          }
          .text {
            display: flex;
            font-size: 2em;
            text-align: center;
            margin-bottom: 100px;
            justify-content: center;
          }
          .container01 {
            width: 100%;
            height: 100px;
            display: flex;
            padding: 20px;
            align-items: center;
            margin-bottom: 100px;
            justify-content: flex-start;
            background-color: transparent;
          }
          .text1 {
            font-size: 20px;
            margin-right: 40px;
          }
          .container02 {
            width: 100%;
            background-color: #cccccc;
          }
          .container03 {
            width: 100%;
            display: flex;
            padding: 20px;
            align-items: center;
            margin-bottom: 100px;
            justify-content: flex-start;
            background-color: transparent;
          }
          .text2 {
            font-size: 20px;
            margin-right: 40px;
          }
          .container04 {
            width: 100%;
            height: 600px;
            background-color: transparent;
          }
          .container05 {
            width: 100%;
            display: flex;
            padding: 20px;
            align-items: center;
            margin-bottom: 100px;
            justify-content: flex-start;
            background-color: transparent;
          }
          .text3 {
            font-size: 20px;
            margin-right: 40px;
          }
          .container06 {
            width: 100%;
            height: 600px;
          }
          .container07 {
            width: 100%;
            display: flex;
            padding: 20px;
            align-items: center;
            margin-bottom: 100px;
            justify-content: flex-start;
            background-color: transparent;
          }
          .text4 {
            font-size: 20px;
            margin-right: 40px;
          }
          .container08 {
            width: 100%;
          }
          .container09 {
            width: 100%;
            display: flex;
            padding: 20px;
            align-items: center;
            margin-bottom: 100px;
            justify-content: flex-start;
            background-color: transparent;
          }
          .text5 {
            font-size: 20px;
            margin-right: 40px;
          }
          .container10 {
            width: 100%;
          }
          .container11 {
            width: 100%;
            display: flex;
            padding: 20px;
            align-items: center;
            margin-bottom: 100px;
            justify-content: flex-start;
            background-color: transparent;
          }
          .text6 {
            font-size: 20px;
            margin-right: 40px;
          }
          .container12 {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default LayoutComponents1

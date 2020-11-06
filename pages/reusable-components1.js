import React from 'react'
import Head from 'next/head'

import SectionHeading from '../components/section-heading'
import FooterMenu from '../components/footer-menu'
import Button from '../components/button'
import PricingCard from '../components/pricing-card'
import InfoCard from '../components/info-card'
import ReviewCard from '../components/review-card'

const ReusableComponents1 = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>ReusableComponents1 - Demo Project 3</title>
          <meta
            name="description"
            content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
          />
          <meta property="og:title" content="ReusableComponents1 - Demo Project 3" />
          <meta
            property="og:description"
            content="In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations."
          />
          <meta
            property="og:image"
            content="https://storage.googleapis.com/playground-bucket.teleporthq.io/aea505021c3337abe2c72fce4ca172f1"
          />
        </Head>
        <span className="text">Reusable Components</span>
        <div className="container01">
          <span className="text1">Section Heading</span>
          <div></div>
          <SectionHeading></SectionHeading>
        </div>
        <div className="container03">
          <span className="text2">FooterSection</span>
          <div>
            <FooterMenu></FooterMenu>
          </div>
        </div>
        <div className="container05">
          <span className="text3">Button</span>
          <Button></Button>
        </div>
        <div className="container06">
          <span className="text4">Pricing Card</span>
          <PricingCard></PricingCard>
        </div>
        <div className="container07">
          <span className="text5">InfoCard</span>
          <div className="container08">
            <InfoCard></InfoCard>
          </div>
        </div>
        <div className="container09">
          <span className="text6">Review Card</span>
          <ReviewCard></ReviewCard>
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
            margin-bottom: 30px;
            justify-content: center;
          }
          .container01 {
            width: 100%;
            display: flex;
            align-items: center;
          }
          .text1 {
            width: 200px;
            display: inline-block;
          }
          .container03 {
            width: 100%;
            display: flex;
            margin-top: 100px;
            align-items: center;
            padding-top: 20px;
            padding-left: 20px;
            padding-bottom: 20px;
          }
          .text2 {
            margin-right: 100px;
          }
          .container05 {
            width: 100%;
            height: 148px;
            display: flex;
            align-items: center;
            background-color: transparent;
          }
          .text3 {
            width: 200px;
            display: inline-block;
          }
          .container06 {
            width: 100%;
            display: flex;
            align-items: center;
            background-color: transparent;
          }
          .text4 {
            margin-right: 100px;
          }
          .container07 {
            width: 100%;
            display: flex;
            margin-top: 100px;
            align-items: center;
            padding-top: 20px;
            padding-left: 20px;
            padding-bottom: 20px;
          }
          .text5 {
            margin-right: 100px;
          }
          .container08 {
            background-color: #00bcd4;
          }
          .container09 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 100px;
            background-color: transparent;
          }
          .text6 {
            margin-right: 100px;
          }
        `}
      </style>
    </>
  )
}

export default ReusableComponents1

import React from 'react'

import InfoCard from './info-card'

const FeaturesGrid = () => {
  return (
    <>
      <div className="grid-section">
        <span className="text">What can you do with components</span>
        <div className="cardsgrid">
          <div className="whitecard">
            <img
              src="https://image.flaticon.com/icons/svg/201/201572.svg"
              className="thqImage image"
            />
            <span className="text1">Easy to use</span>
            <span className="text2">
              I&apos;m not a component since I&apos;m used just once. But you can right-click me,
              select &quot;Create Component&quot; and reuse me if you want.Â 
            </span>
          </div>
          <InfoCard
            loremipsumdolo="This is an instance of a component. As you can see below, we reuse it."
            unlimitedorders="Analytics"
          ></InfoCard>
          <InfoCard
            loremipsumdolo="This is the same one, we just changed the text and image using overrides."
            unlimitedorders="Payments"
          ></InfoCard>
          <InfoCard
            loremipsumdolo="You can go ahead and duplicate these and use them as you see fit."
            unlimitedorders="How to use"
          ></InfoCard>
        </div>
      </div>
      <style jsx>
        {`
          .grid-section {
            color: #fff;
            width: 100%;
            display: flex;
            padding: 100px;
            overflow: auto;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #00bcd4;
          }
          .text {
            color: #ffffff;
            font-size: 32px;
          }
          .cardsgrid {
            display: grid;
            grid-gap: 30px;
            align-items: start;
            padding-top: 50px;
            align-content: stretch;
            justify-items: center;
            flex-direction: column;
            justify-content: stretch;
            background-color: transparent;
            grid-template-rows: auto auto;
            grid-template-columns: 1fr 1fr;
          }
          .whitecard {
            display: flex;
            padding: 30px;
            max-width: 400px;
            box-sizing: border-box;
            min-height: 250px;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
            background-color: #fff;
          }
          .image {
            width: 50px;
            height: 50px;
          }
          .text1 {
            color: #000000;
            display: inline-block;
            font-size: 24px;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .text2 {
            color: #000000;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          @media (max-width: 991px) {
            .grid-section {
              padding: 50px;
            }
            .whitecard {
              max-width: none;
              min-height: 250px;
            }
          }
          @media (max-width: 767px) {
            .grid-section {
              padding: 30px;
            }
            .cardsgrid {
              padding-top: 20px;
              grid-template-columns: 1fr;
            }
            .whitecard {
              width: 80%;
              min-height: 250px;
              align-items: stretch;
            }
          }
          @media (max-width: 479px) {
            .text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default FeaturesGrid

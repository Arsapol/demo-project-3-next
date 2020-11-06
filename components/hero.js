import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'

const Hero = (props) => {
  return (
    <>
      <div className="container">
        <div className="container1">
          <div className="container2">
            <span className="text">{props.tagline}</span>
            <h1 className="thqHeading1 text1">{props.heading}</h1>
            <span className="text2">{props.paragraph}</span>
            <Button button="LET'S START"></Button>
          </div>
          <div className="container3">
            <img src={props.src} className="thqImage image" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            font-size: 16px;
            max-width: 1200px;
            align-items: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
              'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            justify-content: center;
            background-color: transparent;
          }
          .container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            padding-top: 100px;
            padding-left: 100px;
            padding-right: 100px;
            padding-bottom: 100px;
            justify-content: space-between;
            background-color: transparent;
          }
          .container2 {
            display: flex;
            margin-right: 30px;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .text {
            color: #ffff;
            font-size: 14px;
          }
          .text1 {
            color: #fff;
            font-size: 2.5em;
            margin-top: 0.67em;
            margin-bottom: 0.67em;
          }
          .text2 {
            color: #fff;
            font-size: 18px;
            margin-bottom: 20px;
          }
          .container3 {
            background-color: transparent;
          }
          .image {
            width: 500px;
            border-radius: 25px;
          }
          @media (max-width: 991px) {
            .container {
              justify-content: flex-start;
            }
            .container1 {
              width: 100%;
              padding: 50px;
              max-width: 1200px;
              align-items: center;
              flex-direction: column;
            }
            .container2 {
              align-items: center;
              margin-right: 0;
              padding-bottom: 50px;
              background-color: transparent;
            }
            .text {
              color: #fff;
            }
            .text1 {
              color: #fff;
            }
            .text2 {
              color: #fff;
              max-width: 500;
              text-align: center;
              margin-bottom: 50;
            }
            .container3 {
              background-color: transparent;
            }
            .image {
              width: 250px;
              display: none;
            }
          }
          @media (max-width: 767px) {
            .text1 {
              text-align: center;
            }
            .text2 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .container {
              justify-content: flex-start;
            }
            .container1 {
              padding: 30px;
              padding-top: 100px;
              padding-left: 100px;
              padding-right: 100px;
              padding-bottom: 100px;
            }
            .container2 {
              align-items: center;
            }
            .text1 {
              font-size: 2em;
              margin-top: 0.6em;
              text-align: center;
              margin-bottom: 0.67em;
            }
            .text2 {
              text-align: center;
            }
            .image {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  heading: 'Heading',
  tagline: 'Tagline',
  paragraph: 'Paragraph',
}

Hero.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string,
  tagline: PropTypes.string,
  paragraph: PropTypes.string,
}

export default Hero

import React from 'react'

import PropTypes from 'prop-types'

import SectionHeading from './section-heading'
import LogosBar from './logos-bar'
import Button from './button'

const ConnectionSection = (props) => {
  return (
    <>
      <div className="connection-section">
        <div className="textcontainer">
          <SectionHeading
            largeheading="Customize your content"
            smallheading="Add Your Titles"
          ></SectionHeading>
          <span className="text">
            One or two lines of text have enough visual punch to communicate your message. And of
            course, you can add logo&apos;s in the page.
          </span>
        </div>
        <LogosBar></LogosBar>
        <div className="setup-section">
          <div className="imagecontainer"></div>
          <div className="textcontainer1">
            <SectionHeading
              largeheading="This one is a large heading"
              smallheading="Simple, right?"
            ></SectionHeading>
            <span className="text1">{props.loremipsumdolo}</span>
            <Button></Button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .connection-section {
            width: 100%;
            display: flex;
            padding: 100px;
            overflow: auto;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .textcontainer {
            display: flex;
            text-align: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .text {
            color: #000000;
            width: 70%;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
          }
          .setup-section {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 40px;
            border-color: #03a9f4;
            border-style: solid;
            border-width: 0px;
            justify-content: center;
            background-color: transparent;
            border-top-width: 1.5px;
          }
          .imagecontainer {
            width: 50%;
            height: 380px;
            box-sizing: border-box;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000');
            background-repeat: no-repeat;
            background-position: center;
          }
          .textcontainer1 {
            width: 400px;
            display: flex;
            box-sizing: border-box;
            align-items: flex-start;
            margin-left: 50px;
            flex-direction: column;
            background-color: transparent;
          }
          .text1 {
            color: #000000;
            display: inline-flex;
            text-align: left;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 20px;
          }
          @media (max-width: 991px) {
            .connection-section {
              padding: 50px;
            }
            .setup-section {
              padding-top: 20px;
            }
            .textcontainer1 {
              margin-left: 20px;
            }
            .text1 {
              font-size: 14px;
            }
          }
          @media (max-width: 767px) {
            .connection-section {
              padding: 30px;
            }
            .setup-section {
              flex-direction: column;
            }
            .imagecontainer {
              width: 80%;
              height: 300px;
              margin-bottom: 20px;
            }
          }
          @media (max-width: 479px) {
            .text {
              width: 90%;
            }
            .imagecontainer {
              width: 90%;
            }
            .textcontainer1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ConnectionSection.defaultProps = {
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.',
}

ConnectionSection.propTypes = {
  loremipsumdolo: PropTypes.string,
}

export default ConnectionSection

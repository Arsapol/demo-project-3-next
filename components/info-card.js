import React from 'react'

import PropTypes from 'prop-types'

const InfoCard = (props) => {
  return (
    <>
      <div className="container">
        <img src={props.src} className="thqImage image" />
        <span className="text">{props.title}</span>
        <span className="text1">{props.loremipsumdolo}</span>
      </div>
      <style jsx>
        {`
          .container {
            width: 400px;
            display: flex;
            padding: 30px;
            overflow: auto;
            box-sizing: border-box;
            min-height: 250px;
            border-color: #ffffff;
            border-style: solid;
            border-width: 2px;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .image {
            width: 50px;
          }
          .text {
            color: #ffffff;
            display: inline-block;
            font-size: 24px;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .text1 {
            color: #ffffff;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          @media (max-width: 991px) {
            .container {
              width: 300px;
            }
          }
          @media (max-width: 767px) {
            .container {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

InfoCard.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title: 'Title',
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpi.',
}

InfoCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  loremipsumdolo: PropTypes.string,
}

export default InfoCard

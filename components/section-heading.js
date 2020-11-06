import React from 'react'

import PropTypes from 'prop-types'

const SectionHeading = (props) => {
  return (
    <>
      <div className="container">
        <span className="text">{props.smallheading}</span>
        <span className="text1">{props.largeheading}</span>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            overflow: auto;
            flex-direction: column;
          }
          .text {
            color: #03a9f4;
            font-size: 20px;
            padding-bottom: 10px;
          }
          .text1 {
            color: #000000;
            display: inline-block;
            font-size: 2em;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          @media (max-width: 991px) {
            .text1 {
              font-size: 1.5em;
            }
          }
          @media (max-width: 767px) {
            .text {
              font-size: 16px;
            }
            .text1 {
              font-size: 1em;
            }
          }
        `}
      </style>
    </>
  )
}

SectionHeading.defaultProps = {
  largeheading: 'Large Heading',
  smallheading: 'Small Heading',
}

SectionHeading.propTypes = {
  largeheading: PropTypes.string,
  smallheading: PropTypes.string,
}

export default SectionHeading

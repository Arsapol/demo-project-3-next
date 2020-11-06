import React from 'react'

import PropTypes from 'prop-types'

const FooterMenu = (props) => {
  return (
    <>
      <div className="community">
        <span className="text">{props.title}</span>
        <div className="container">
          <span className="text1">Subtitle</span>
          <span className="text2">Subtitle</span>
          <span className="text3">Subtitle</span>
          <span className="text4">Subtitle</span>
          <span className="text5">Subtitle</span>
        </div>
      </div>
      <style jsx>
        {`
          .community {
            display: flex;
            overflow: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-direction: column;
            background-color: transparent;
          }
          .text {
            font-size: 1.5em;
          }
          .container {
            color: #413d3d;
            display: flex;
            margin-top: 10px;
            font-weight: lighter;
            flex-direction: column;
            background-color: transparent;
          }
          .text1 {
            display: inline-flex;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .text2 {
            display: inline-flex;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .text3 {
            display: inline-flex;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .text4 {
            display: inline-flex;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .text5 {
            display: inline-flex;
            font-size: 14px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          @media (max-width: 991px) {
            .text {
              font-size: 1em;
            }
          }
          @media (max-width: 767px) {
            .text1 {
              font-size: 12px;
            }
            .text2 {
              font-size: 12px;
            }
            .text3 {
              font-size: 12px;
            }
            .text4 {
              font-size: 12px;
            }
            .text5 {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

FooterMenu.defaultProps = {
  title: 'Title',
}

FooterMenu.propTypes = {
  title: PropTypes.string,
}

export default FooterMenu

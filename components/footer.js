import React from 'react'

import PropTypes from 'prop-types'

import FooterMenu from './footer-menu'

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <span className="text">About us</span>
            <span className="text1">{props.utpharetrapuru}</span>
          </div>
          <div className="container1">
            <FooterMenu title="Title"></FooterMenu>
            <FooterMenu title="Title"></FooterMenu>
            <FooterMenu title="Title"></FooterMenu>
          </div>
        </div>
        <div className="rights-section">
          <span className="text2">Â© 2020 Company Name. All rights reserved.</span>
        </div>
      </div>
      <style jsx>
        {`
          .footer {
            width: 100%;
            display: flex;
            padding: 0;
            overflow: auto;
            box-sizing: border-box;
            flex-direction: column;
            background-color: #d0ece8;
          }
          .container {
            width: 100%;
            display: flex;
            box-sizing: border-box;
            padding-top: 50px;
            padding-left: 100px;
            padding-right: 100px;
            padding-bottom: 50px;
            justify-content: space-between;
            background-color: transparent;
          }
          .about {
            width: 350px;
            display: flex;
            box-sizing: border-box;
            align-items: flex-start;
            flex-direction: column;
            background-color: transparent;
          }
          .text {
            font-size: 1.5em;
          }
          .text1 {
            color: #000000;
            display: inline-flex;
            font-size: 14px;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .container1 {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            background-color: transparent;
          }
          .rights-section {
            width: 100%;
            height: 100px;
            display: flex;
            align-self: center;
            box-sizing: border-box;
            align-items: center;
            border-color: rgba(143, 143, 143, 0.36);
            border-style: solid;
            border-width: 0;
            justify-content: center;
            background-color: transparent;
            border-top-width: 1px;
            border-left-width: 0;
            border-right-width: 0;
            border-bottom-width: 0;
          }
          .text2 {
            font-size: 14px;
            text-align: center;
          }
          @media (max-width: 991px) {
            .container {
              padding-left: 50px;
              padding-right: 50px;
              justify-content: space-between;
            }
            .text {
              font-size: 1em;
            }
            .text1 {
              font-size: 12px;
            }
          }
          @media (max-width: 767px) {
            .container {
              padding-top: 30px;
              padding-left: 30px;
              padding-right: 30px;
              padding-bottom: 30px;
            }
            .about {
              width: 150px;
            }
          }
          @media (max-width: 479px) {
            .container {
              flex-direction: column;
            }
            .about {
              width: 100%;
              align-items: center;
              margin-bottom: 20px;
              justify-content: flex-start;
            }
            .text1 {
              text-align: center;
            }
            .container1 {
              background-color: transparent;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  utpharetrapuru:
    'Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.',
}

Footer.propTypes = {
  utpharetrapuru: PropTypes.string,
}

export default Footer

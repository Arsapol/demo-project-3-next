import React from 'react'

import CompanyLogo from './company-logo'

const LogosBar = () => {
  return (
    <>
      <div className="container">
        <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
        <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
        <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
        <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
        <CompanyLogo src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></CompanyLogo>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            flex-wrap: wrap;
            box-sizing: border-box;
            align-items: center;
            padding-top: 50px;
            padding-bottom: 50px;
            justify-content: center;
            background-color: transparent;
          }
          @media (max-width: 767px) {
            .container {
              padding-top: 20px;
              padding-bottom: 20px;
            }
          }
          @media (max-width: 479px) {
            .container {
              padding-bottom: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default LogosBar

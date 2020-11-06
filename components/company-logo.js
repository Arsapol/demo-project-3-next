import React from 'react'

import PropTypes from 'prop-types'

const CompanyLogo = (props) => {
  return (
    <>
      <div className="container">
        <img src={props.src} className="thqImage image" />
      </div>
      <style jsx>
        {`
          .container {
            overflow: auto;
            box-sizing: border-box;
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 15px;
            background-size: contain;
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: center;
          }
          .image {
            width: 150px;
          }
          @media (max-width: 767px) {
            .image {
              width: 150px;
            }
          }
          @media (max-width: 479px) {
            .container {
              margin-left: 10px;
              margin-right: 10px;
            }
            .image {
              width: 150px;
            }
          }
        `}
      </style>
    </>
  )
}

CompanyLogo.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

CompanyLogo.propTypes = {
  src: PropTypes.string,
}

export default CompanyLogo

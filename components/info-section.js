import React from 'react'

import PropTypes from 'prop-types'

import SectionHeading from './section-heading'
import Button from './button'

const InfoSection = (props) => {
  return (
    <>
      <div className="card-2">
        <div className="textcontainer">
          <SectionHeading></SectionHeading>
          <span className="text">{props.loremipsumdolo}</span>
          <span className="text1">{props.utpharetrapuru}</span>
          <Button button="START NOW"></Button>
        </div>
        <div className="imagecontainer"></div>
      </div>
      <style jsx>
        {`
          .card-2 {
            width: 100%;
            display: flex;
            overflow: auto;
            max-width: 1200px;
            box-sizing: border-box;
            max-height: 100vh;
            align-items: center;
            padding-top: 100px;
            padding-left: 100px;
            padding-right: 100px;
            padding-bottom: 100px;
            justify-content: center;
            background-color: transparent;
          }
          .textcontainer {
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .text {
            color: #000000;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .text1 {
            color: #353535;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 20px;
          }
          .imagecontainer {
            width: 50%;
            height: 380px;
            max-width: 600px;
            box-sizing: border-box;
            margin-left: 50px;
            border-radius: 20px;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000');
            background-repeat: no-repeat;
            background-position: center;
          }
          @media (max-width: 991px) {
            .card-2 {
              padding: 50px;
            }
            .imagecontainer {
              width: 60%;
            }
          }
          @media (max-width: 767px) {
            .card-2 {
              padding-left: 30px;
              padding-right: 30px;
              flex-direction: column;
            }
            .text {
              font-size: 14px;
            }
            .text1 {
              font-size: 14px;
            }
            .imagecontainer {
              width: 70%;
              margin-left: 20px;
              background-size: contain;
            }
          }
          @media (max-width: 479px) {
            .card-2 {
              padding: 30px;
            }
            .textcontainer {
              width: 100%;
            }
            .imagecontainer {
              width: 100%;
              height: 250px;
              margin-top: 20px;
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  )
}

InfoSection.defaultProps = {
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies. ',
  utpharetrapuru:
    'Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies. ',
}

InfoSection.propTypes = {
  loremipsumdolo: PropTypes.string,
  utpharetrapuru: PropTypes.string,
}

export default InfoSection

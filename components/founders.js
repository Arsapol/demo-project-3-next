import React from 'react'

import PropTypes from 'prop-types'

const Founders = (props) => {
  return (
    <>
      <div className="founder-section">
        <div className="imagecontainer"></div>
        <div className="textcontainer">
          <span className="text">{props.largeheading}</span>
          <span className="text1">{props.loremipsumdolo}</span>
          <span className="text2">{props.loremipsum2p}</span>
          <span className="text3">{props.loremipsum3p}</span>
        </div>
      </div>
      <style jsx>
        {`
          .founder-section {
            width: 100%;
            display: flex;
            padding: 100px;
            overflow: auto;
            box-sizing: border-box;
            justify-content: center;
            background-color: transparent;
          }
          .imagecontainer {
            width: 50%;
            height: 500px;
            display: flex;
            max-width: 500px;
            box-sizing: border-box;
            margin-right: 50px;
            border-radius: 500px;
            background-size: cover;
            background-color: rgba(20, 20, 20, 0.2);
            background-image: url('https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000');
            background-repeat: no-repeat;
            background-position: center;
          }
          .textcontainer {
            width: 50%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .text {
            color: #000000;
            display: inline-block;
            font-size: 2em;
            font-weight: bold;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .text1 {
            color: #000000;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .text2 {
            color: #353535;
            display: inline-flex;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .text3 {
            color: #353535;
            display: inline-flex;
            padding-top: 10px;
            padding-bottom: 10px;
          }
          @media (max-width: 991px) {
            .founder-section {
              padding: 50px;
            }
            .text {
              font-size: 1.5em;
            }
            .text1 {
              font-size: 14px;
            }
            .text2 {
              font-size: 14px;
            }
            .text3 {
              font-size: 14px;
            }
          }
          @media (max-width: 767px) {
            .founder-section {
              padding: 30px;
              align-items: center;
            }
            .imagecontainer {
              height: 300px;
              margin-right: 30px;
            }
          }
          @media (max-width: 479px) {
            .founder-section {
              flex-direction: column;
            }
            .imagecontainer {
              width: 80%;
              margin-right: 0px;
              margin-bottom: 20px;
            }
            .textcontainer {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

Founders.defaultProps = {
  largeheading: 'Large heading',
  loremipsum2p:
    'Lorem ipsum 2. Pharetra purus justo vitae purus. Cras mollis risus ac Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.  magna sodales ultricies. ',
  loremipsum3p:
    'Lorem ipsum 3. Pharetra purus justo vitae purus. Cras mollis risus ac Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.  magna sodales ultricies. ',
  loremipsumdolo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus.',
}

Founders.propTypes = {
  largeheading: PropTypes.string,
  loremipsum2p: PropTypes.string,
  loremipsum3p: PropTypes.string,
  loremipsumdolo: PropTypes.string,
}

export default Founders

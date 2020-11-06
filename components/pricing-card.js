import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'

const PricingCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="top">
          <span className="text">{props.quizchecksmonth}</span>
          <span className="text1">{props.getstartednow}</span>
          <span className="text2">{props.then10month}</span>
        </div>
        <div className="container1">
          <span className="text3">{props.dayfreetria}</span>
          <span className="text4">{props.unlimitedquizze}</span>
          <span className="text5">{props.fullautoma}</span>
          <span className="text6">{props.unlimitedwebsit}</span>
          <span className="text7">{props.licensekeyread}</span>
          <span className="text8">{props.sellyourautoma}</span>
          <Button button="TRY NOW"></Button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 350px;
            display: flex;
            z-index: 2;
            overflow: auto;
            box-sizing: border-box;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
          }
          .top {
            color: #ffffff;
            width: 100%;
            display: flex;
            align-self: center;
            box-sizing: border-box;
            align-items: center;
            padding-top: 30px;
            flex-direction: column;
            padding-bottom: 30px;
            justify-content: center;
            background-color: #00bcd4;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .text {
            display: flex;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
          }
          .text1 {
            padding: 10px;
            font-size: 12px;
          }
          .text2 {
            font-size: 2em;
          }
          .container1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5), 0px 0px 0px 0px undefined,
              0px 0px 0px 0px undefined, 0px 0px 0px 0px undefined;
            align-items: center;
            padding-top: 30px;
            flex-direction: column;
            padding-bottom: 50px;
            justify-content: center;
            background-color: #fff;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          }
          .text3 {
            padding: 10px;
            font-size: 12px;
          }
          .text4 {
            padding: 10px;
            font-size: 12px;
          }
          .text5 {
            padding: 10px;
            font-size: 12px;
          }
          .text6 {
            padding: 10px;
            font-size: 12px;
          }
          .text7 {
            padding: 10px;
            font-size: 12px;
          }
          .text8 {
            padding: 10px;
            font-size: 12px;
            margin-bottom: 20px;
          }
          @media (max-width: 991px) {
            .container {
              margin-right: 20px;
            }
            .text {
              text-align: center;
            }
            .text1 {
              text-align: center;
            }
            .text2 {
              font-size: 1.5em;
            }
          }
          @media (max-width: 767px) {
            .container {
              margin-top: 20px;
              margin-right: 0px;
              margin-bottom: 20px;
            }
            .top {
              padding-top: 20px;
              padding-bottom: 20px;
            }
            .text2 {
              font-size: 1em;
            }
          }
          @media (max-width: 479px) {
            .container {
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

PricingCard.defaultProps = {
  fullautoma: '100% full automatic e-mail replies',
  dayfreetria: '14 day free trial',
  then10month: 'then $10 / month',
  getstartednow: 'Get started now with our free 14 day trial',
  licensekeyread: 'License Key ready with Digistore',
  sellyourautoma: 'Sell your automatic answers',
  quizchecksmonth: 'quizchecks Monthly payment',
  unlimitedquizze: 'Unlimited quizzes',
  unlimitedwebsit: 'Unlimited websites',
}

PricingCard.propTypes = {
  fullautoma: PropTypes.string,
  dayfreetria: PropTypes.string,
  then10month: PropTypes.string,
  getstartednow: PropTypes.string,
  licensekeyread: PropTypes.string,
  sellyourautoma: PropTypes.string,
  quizchecksmonth: PropTypes.string,
  unlimitedquizze: PropTypes.string,
  unlimitedwebsit: PropTypes.string,
}

export default PricingCard

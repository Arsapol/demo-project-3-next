import React from 'react'

import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <>
      <div className="container">
        <button className="thqButton button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            overflow: auto;
          }
          .button {
            color: #fff;
            display: inline-block;
            font-size: 14px;
            text-align: center;
            padding-top: 10px;
            border-color: #00bcd4;
            border-style: solid;
            border-width: 1px;
            padding-left: 15px;
            border-radius: 6px;
            padding-right: 15px;
            padding-bottom: 10px;
            background-color: #00bcd4;
          }
        `}
      </style>
    </>
  )
}

Button.defaultProps = {
  button: 'BUTTON',
}

Button.propTypes = {
  button: PropTypes.string,
}

export default Button

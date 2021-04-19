import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CalculatorPad (props) {
  return (
    <div className="row">
      <div className="col-6">
        <span className="fa-layers fa-fw fa-4x">
          <FontAwesomeIcon icon="circle" />
          <FontAwesomeIcon icon="chevron-right" inverse transform="shrink-6" />
        </span>
        Payment
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-3">
            1
          </div>
          <div className="col-3">
            2
          </div>
          <div className="col-3">
            3
          </div>
          <div className="col-3">
            Qty
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            4
          </div>
          <div className="col-3">
            5
          </div>
          <div className="col-3">
            6
          </div>
          <div className="col-3">
            Disc
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            7
          </div>
          <div className="col-3">
            8
          </div>
          <div className="col-3">
            9
          </div>
          <div className="col-3">
            Price
          </div>
        </div>
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-3">
            0
          </div>
          <div className="col-3">
            .
          </div>
          <div className="col-3">
            <FontAwesomeIcon icon="backspace" />
          </div>
        </div>
      </div>
    </div>
  )
}

CalculatorPad.propTypes = {
}

export default CalculatorPad

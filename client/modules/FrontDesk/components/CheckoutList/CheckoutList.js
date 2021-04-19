import React from 'react'
import PropTypes from 'prop-types'

// Import Components
import ListPriceItem from '../ListPriceItem/ListPriceItem'
import CalculatorPad from '../CalculatorPad/CalculatorPad'

// Import Helper
import {getSum} from '../../../../helpers/calculation'

function CheckoutList (props) {

  return (
    <div>
      <div>
        <ul>
          {
            props.checkoutLists.map((checkoutList, index) => (
              <ListPriceItem
                index={index}
                checkoutList={checkoutList}
                key={priceList.id}
              />
            ))
          }
        </ul>
        <div className="float-right">
          <h2>Total: {props.currenc} {getSum(props.checkoutLists, "rate")}</h2>
        </div>
      </div>
      <CalculatorPad />
    </div>
  )
}

CheckoutList.propTypes = {
  checkoutList: PropTypes.array
}

export default CheckoutList

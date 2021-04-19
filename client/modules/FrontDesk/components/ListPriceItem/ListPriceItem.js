import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import css
import style from './ListPriceItem.css';

function ListPriceItem (props) {
  if (props.discount > 0) {
    const discounted = true;
  }

  if (props.rate != props.actual_rate) {
    const rateEdited = true
  }

  const list = props.checkoutList
  return (
    <li class="row">
      <div className="col">
        <h3>{list.name}</h3>
        <h4 className="ml-2">
          <span className={style.quantity} >{list.quantity}</span> {list.per} at {props.currency} {list.rate} / {list.per}         
        </h4>
      </div>
      <div className="col-auto">
        <div className="float-right">
          <h3>
            <span>{props.currency}</span>
            <span className="ml-1">{list.rate}</span>
          </h3>
          {discounted&&
            <h3 className={style.dicounted}>
              <span>{props.currency}</span>
              <span className="ml-1">{list.rate}</span>
            </h3>
          }
        </div>
      </div>
    </li>
  )
}

ListPriceItem.propTypes = {
}

export default ListPriceItem

import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import ItemListItem from '../InventoryListItem/InventoryListItem';

// Import style
import style from './InventoryList.css';

function InventoryList(props) {
  // console.log(props);
  return (
    <div className="row mt-5">
      {props.items.map((item, index) => (
        <div className="col-sm-4 mb-4">
          <div className={`p-3 rounded`} to={`/home/${item.id}`}>
            {item.name}
          </div>
        </div>
      ))}
    </div>
    );
}

InventoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default InventoryList;

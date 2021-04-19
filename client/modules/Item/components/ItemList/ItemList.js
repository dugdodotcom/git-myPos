import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import ItemListItem from '../ItemListItem/ItemListItem';

// Import style
import style from './ItemList.css';

function ItemList(props) {
  // console.log(props);
  return (
    <table className={`table table-striped ${style['table-view']}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Category</th>
            <th scope="col">Qty</th>
            <th scope="col">Per</th>
            <th scope="col">Rate</th>
            <th scope="col" className="th-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map((item, index) => (
              <ItemListItem
                index={index}
                item={item}
                key={item.id}
                onEdit={() => props.toggleEditItem(item.id)}
                onDelete={() => props.handleDeleteItem(item.id)}
              />
            ))
          }
        </tbody>
      </table>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default ItemList;

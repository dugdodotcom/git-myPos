import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function ItemListItem(props) {
  const item = props.item
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{item.name}</td>
      <td>{item.category.name}</td>
      <td>{item.quantity}</td>
      <td>{item.per}</td>
      <td>{item.rate}</td>
      <td>
        <div className="btn-action">

          <Link to={`/inventory/item/edit/${props.item.id}`} >
            <button type="button" className="btn btn-primary" >Edit</button>
          </Link>
          
          <button type="button" className="btn btn-danger btn-right" onClick={props.onDelete}>Delete</button>

        </div>
      </td>
    </tr>
  );
}

ItemListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ItemListItem;

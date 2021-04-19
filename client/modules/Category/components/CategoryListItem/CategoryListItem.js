import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function CategoryListItem(props) {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.category.name}</td>
      <td>
        <div className="btn-action">

          <Link to={`/inventory/category/edit/${props.category.id}`} >
            <button type="button" className="btn btn-primary" >Edit</button>
          </Link>
          
          <button type="button" className="btn btn-danger btn-right" onClick={props.onDelete}>Delete</button>

        </div>
      </td>
    </tr>
  );
}

CategoryListItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CategoryListItem;

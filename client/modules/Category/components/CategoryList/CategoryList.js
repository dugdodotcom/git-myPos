import React from 'react'
import PropTypes from 'prop-types'

// Import Component
import CategoryListItem from '../CategoryListItem/CategoryListItem'

// Import style
import style from './CategoryList.css'

function CategoryList (props) {
  return (
    <table className={`table table-striped ${style['table-view']}`}>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Item Name</th>
          <th scope='col' className='th-action'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {props.categories.map((category, index) => (
          <CategoryListItem
            index={index}
            category={category}
            key={category.id}
            onEdit={() => props.toggleEditCategory(category.id)}
            onDelete={() => props.handleDeleteCategory(category.id)}
          />
        ))}
      </tbody>
    </table>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  handleDeleteCategory: PropTypes.func.isRequired,
  toggleEditCategory: PropTypes.func.isRequired
}

export default CategoryList

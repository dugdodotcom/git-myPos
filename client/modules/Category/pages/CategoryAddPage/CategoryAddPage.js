
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// get components
import CategoryForm from '../../components/CategoryForm/CategoryForm';

// Import Selectors
import { getCategory } from '../../CategoryReducer';

// Import Action
import { addCategoryRequest } from '../../CategoryActions';

// Import Style
// import style from './CategoryListPage.css';

export class CategoryAddPage extends Component {

  toggleEditCategory = () => {
    console.log("edit category")
  }

  handleAddCategory = (name) => {
    this.props.dispatch(addCategoryRequest({ name }));
  };

  render() {
    return (
      <div>
        <h2>Add Category</h2>
        <CategoryForm saveCategory={this.handleAddCategory} category={{}} />
      </div>
    );
  }
}

CategoryAddPage.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CategoryAddPage);

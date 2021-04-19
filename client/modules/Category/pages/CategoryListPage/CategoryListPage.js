import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// get components
import CategoryList from '../../components/CategoryList/CategoryList'

// Import Selectors
import { getCategories } from '../../CategoryReducer';

// Import Action
import { fetchCategories, deleteCategoryRequest } from '../../CategoryActions';

export class CategoryListPage extends Component {
  componentDidMount() {
    if (!this.props.categories || this.props.categories.length == 0) {
      this.props.dispatch(fetchCategories());
    }
  }

  toggleViewFormAction = () => {
    console.log("add form")
  }

  handleDeleteCategory = category => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteCategoryRequest(category));
    }
  }

  toggleEditCategory = () => {
    console.log("edit category")
  }

  render() {
    return (
      <div>
        <Link to={'/inventory/category/add'} >
        <button type="button" className='btn btn-primary mt-2 mb-2'>Add</button>
        </Link>
        
        <CategoryList handleDeleteCategory={this.handleDeleteCategory} toggleEditCategory={this.toggleEditCategory} categories={this.props.categories} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CategoryListPage.need = [() => { return fetchCategories(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    categories: getCategories(state),
  };
}

CategoryListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CategoryListPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Import Style
import styles from './CategoryPage.css';

// Import Selectors
import { getCategories } from '../../../Category/CategoryReducer';

// Import Action
import { fetchCategories, deleteCategoryRequest } from '../../../Category/CategoryActions';

export class CategoryPage extends Component {
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
      <div className="row mt-5">
        {this.props.categories.map((category, index) => (
          <div className="col-sm-4 mb-4" key={category.id}>
            <Link className={`p-3 rounded d-block ${styles['list-style']}`} to={`/home/${category.slug}`}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CategoryPage.need = [() => { return fetchCategories(); }];

// Retrieve data from store as props
// function mapStateToProps(state) {
//   return {
//     categories: getCategories(state),
//   };
// }

CategoryPage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CategoryPage);

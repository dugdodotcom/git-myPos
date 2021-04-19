
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// get components
import CategoryForm from '../../components/CategoryForm/CategoryForm';

// Import Selectors
import { getCategory } from '../../CategoryReducer';

// Import Action
import { fetchCategory, modifyCategoryRequest } from '../../CategoryActions';

// Import Style
// import style from './CategoryListPage.css';

export class CategoryEditPage extends Component {

  handleEditCategory = (name) => {
    // this.props.dispatch(toggleAddPost());
    this.props.dispatch(modifyCategoryRequest({ name }, this.props.params.id));
  };

  render() {
    return (
      <div>
        <CategoryForm saveCategory={this.handleEditCategory} category={this.props.category} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
CategoryEditPage.need = [params => {
  return fetchCategory(params.id);
}];


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    category: getCategory(state, props.params.id),
  };
}

CategoryEditPage.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CategoryEditPage);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// get components
import ItemForm from '../../components/ItemForm/ItemForm';

// Import Selectors
import { getCategories } from '../../../Category/CategoryReducer';

// Import Action
import { fetchCategories } from '../../../Category/CategoryActions';
import { addItemRequest } from '../../ItemActions';

// Import Style
// import style from './ItemListPage.css';

export class ItemAddPage extends Component {

  componentDidMount() {
    if (!this.props.categories || this.props.categories.length == 0) {
      this.props.dispatch(fetchCategories());
    }
  }

  toggleEditItem = () => {
    console.log("edit item")
  }

  handleAddItem = (name, category_id, rate, quantity, per, image) => {
    this.props.dispatch(addItemRequest({ name , category_id, rate, quantity, per, image}, 'multipart/form-data'));
  };

  render() {
    return (
      <div>
        <h2>Add Item</h2>
        <ItemForm saveItem={this.handleAddItem} item={{}} categories={this.props.categories} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ItemAddPage.need = [() => { return fetchCategories(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    categories: getCategories(state),
  };
}

ItemAddPage.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
  }),

  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ItemAddPage);

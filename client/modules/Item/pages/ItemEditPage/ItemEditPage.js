
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// get components
import ItemForm from '../../components/ItemForm/ItemForm';

// Import Selectors
import { getCategories } from '../../../Category/CategoryReducer';
import { getItem } from '../../ItemReducer';

// Import Action
import { fetchCategories } from '../../../Category/CategoryActions';
import { fetchItem, modifyItemRequest } from '../../ItemActions';

// Import Style
// import style from './ItemListPage.css';

export class ItemEditPage extends Component {

  componentDidMount() {
    if (!this.props.categories || this.props.categories.length == 0) {
      this.props.dispatch(fetchCategories());
    }
  }

  toggleEditItem = () => {
    console.log("edit item")
  }

  handleEditItem = (name, category_id, rate, quantity, per) => {
    // this.props.dispatch(toggleAddPost());
    this.props.dispatch(modifyItemRequest({ name, category_id, rate, quantity, per }, this.props.params.id));
  };

  render() {
    return (
      <div>
        <h2>Edit Item</h2>
        <ItemForm saveItem={this.handleEditItem} item={this.props.item} categories={this.props.categories}/>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
ItemEditPage.need = [params => {
  return fetchItem(params.id);
}];


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    item: getItem(state, props.params.id),
    categories: getCategories(state),
  };
}

ItemEditPage.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    per: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ItemEditPage);

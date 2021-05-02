import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// get components
import InventoryList from '../../components/InventoryList/InventoryList';

// Import Selectors
import { getProductLists } from '../../CheckoutReducer';

// Import Action
import { fetchProducts, deleteItemRequest } from '../../CheckoutActions';

export class InventoryPage extends Component {
  componentDidMount() {
    if (!this.props.items || this.props.items.length == 0) {
      console.log("jalan")
      this.props.dispatch(fetchProducts(this.props.params.slug));
    }
  }

  handleDeleteItem = item => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteItemRequest(item));
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <InventoryList items={this.props.items} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
InventoryPage.need = [params => {
  return fetchProducts(params.slug);
}];


// Retrieve data from store as props
// function mapStateToProps(state) {
//   return {
//     items: getProductLists(state),
//   };
// }

InventoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default connect()(InventoryPage);

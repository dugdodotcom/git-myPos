import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Component
import CheckoutList from '../../components/CheckoutList/CheckoutList';
import InventoryTab from '../../components/InventoryTab/InventoryTab';
import BreadcrumbInventory from '../../components/BreadcrumbInventory/BreadcrumbInventory';
import SearchInventory from '../../components/SearchInventory/SearchInventory';
// import InventoryList from '../../components/InventoryList/InventoryList';

// Import Style
// import styles from './MainDesk.css';

// Import selector
import { getCheckoutLists, getProductLists, getCategories } from '../../CheckoutReducer';
// import { getCategories } from '../../../Category/CategoryReducer';
// import { fetchProducts } from '../../CheckoutActions';

export class MainDesk extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // componentDidMount() {
  //   if (!this.props.products || this.props.products.length == 0) {
  //     this.props.dispatch(fetchProducts());
  //   }
  // }
  render() {
    console.log("test", this.props);
    return (
      <div className="row">
        <div className="col-4">
          <CheckoutList checkoutLists={this.props.checkoutLists} />
        </div>
        <div className="col">
          <InventoryTab />
          <div>
            <BreadcrumbInventory />
            <SearchInventory />
          </div>
          {/* {this.props.children} */}
          {React.cloneElement(this.props.children,
            {
              categories: this.props.categories,
            })}
          {/* <InventoryList products={this.props.products} /> */}
        </div>
      </div>
    );
  }
}

// // Actions required to provide data for this component to render in sever side.
// MainDesk.need = [() => { return fetchItems(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    items: getProductLists(state),
    checkoutLists: getCheckoutLists(state),
    categories: getCategories(state),
  };
}

MainDesk.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  checkoutLists: PropTypes.array,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default connect(mapStateToProps)(MainDesk);

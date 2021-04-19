import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Component
import CheckoutList from '../../components/CheckoutList/CheckoutList';
import InventoryTab from '../../components/InventoryTab/InventoryTab';
import BreadcrumbInventory from '../../components/BreadcrumbInventory/BreadcrumbInventory';
import SearchInventory from '../../components/SearchInventory/SearchInventory';
import InventoryList from '../../components/InventoryList/InventoryList';

// Import Style
import styles from './MainDesk.css';

// Import selector
import { getCheckoutLists } from '../../CheckoutReducer';
import { getItems } from '../../../Item/ItemReducer';

export class MainDesk extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <CheckoutList checkoutLists={this.props.checkoutLists} />
        </div>
        <div className="col">
          <InventoryTab />
          <div className={styles['breadcrumb-bar']}>
            <BreadcrumbInventory />
            <SearchInventory />
          </div>
          <InventoryList />
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
    items: getItems(state),
    checkoutLists: getCheckoutLists(state),
  };
}

MainDesk.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checkoutLists: PropTypes.array,
};

export default connect(mapStateToProps)(MainDesk);

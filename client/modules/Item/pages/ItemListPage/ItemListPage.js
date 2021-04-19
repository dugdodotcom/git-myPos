import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// get components
import ItemList from '../../components/ItemList/ItemList';

// Import Selectors
import { getItems } from '../../ItemReducer';

// Import Action
import { fetchItems, deleteItemRequest } from '../../ItemActions';

// Import Style
import style from './ItemListPage.css';

export class ItemListPage extends Component {
  componentDidMount() {
    if (!this.props.items || this.props.items.length == 0) {
      this.props.dispatch(fetchItems());
    }
    
  }

  handleDeleteItem = item => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteItemRequest(item));
    }
  }

  render() {
    return (
      <div>
        <Link to={'/inventory/item/add'} >
        <button type="button" className='btn btn-primary mt-2 mb-2'>Add</button>
        </Link>
        
        <ItemList handleDeleteItem={this.handleDeleteItem} items={this.props.items} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ItemListPage.need = [() => { return fetchItems(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    items: getItems(state),
  };
}

ItemListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ItemListPage);

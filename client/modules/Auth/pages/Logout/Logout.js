import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { logoutRequest } from '../../AuthActions';

export class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(logoutRequest());
  } 
  render() {
    return (
      <div>
        Loading....
      </div>
    );
  }
}

export default connect()(Logout);

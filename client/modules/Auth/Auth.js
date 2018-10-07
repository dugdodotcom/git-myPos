import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(Auth);

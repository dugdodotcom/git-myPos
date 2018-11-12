import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">Column</div>
        </div>
        <div className="row">
          <div className="col-6">Column</div>
        </div>
      </div>
    );
  }
}

Register.need = [];

export default connect()(Register);

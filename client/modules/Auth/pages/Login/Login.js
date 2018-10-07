import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

Login.need = [];

export default connect()(Login);

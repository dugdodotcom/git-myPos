import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Lists extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        This is Lists
      </div>
    );
  }
}

Lists.need = [];

export default connect()(Lists);

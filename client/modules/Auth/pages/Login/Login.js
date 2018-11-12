import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import LoginForm from '../../components/LoginForm/LoginForm';

// Import Actions
import { loginRequest } from '../../AuthActions';

// Import Selectors
import { getErrorForm } from '../../../Form/FormReducer';
import { getLogin } from '../../AuthReducer';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleLogin = (email, password) => {
    this.props.dispatch(loginRequest({ email, password }));
  };

  render() {
    return (
      <div>
        <LoginForm submitLogin={this.handleLogin} showErrorForm={this.props.showErrorForm} />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showErrorForm: getErrorForm(state),
    showLogin: getLogin(state),
  };
}

Login.propTypes = {
  showLogin: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  showErrorForm: PropTypes.object,
};

Login.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(Login);

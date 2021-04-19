import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Auth.css';
// import bootStyle from '../../../../Main.scss';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className={styles['auth-box-center']}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <ul className={'nav nav-tabs'}>
                <li className={'nav-item'}>
                  <Link className={'nav-link'} activeClassName={'active'} to={'/auth/login'} >
                    <FormattedMessage id="logIn" />
                  </Link>
                </li>
                <li className={'nav-item'}>
                  <Link className={'nav-link'} activeClassName={'active'} to={'/auth/register'} >
                    <FormattedMessage id="register" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-12'}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(Auth);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Auth.css';
import bootStyle from '../../../../Main.scss';

export class MainDesk extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className={`container ${styles['auth-box-center']}`}>
        <div className={bootStyle.row}>
          <div className={bootStyle['col-12']}>
            <ul className={`${bootStyle.nav} ${bootStyle['nav-tabs']}`}>
              <li className={bootStyle['nav-item']}>
                <Link className={bootStyle['nav-link']} activeClassName={bootStyle.active} to={'/auth/login'} >
                  <FormattedMessage id="logIn" />
                </Link>
              </li>
              <li className={bootStyle['nav-item']}>
                <Link className={bootStyle['nav-link']} activeClassName={bootStyle.active} to={'/auth/register'} >
                  <FormattedMessage id="register" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={bootStyle.row}>
          <div className={bootStyle['col-12']}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

MainDesk.propTypes = {
  children: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(MainDesk);

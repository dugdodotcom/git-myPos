/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import style from './Header.css';

export function Header(props) {
  const path = props.location.pathname;

  let frontDeskActive = "";
  if ( path == "/" ) {
    frontDeskActive = "active";
  }

  let inventoryActive = "";
  if ( path.match(/inventory/g) ) {
    inventoryActive = "active";
  }

  return (
    <header className={'navbar navbar-dark navbar-expand bg-primary'}>
      <div className="container">
        <button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className={'navbar-toggler-icon'}></span>
        </button>
        <div className={'collapse navbar-collapse'} id="navbarText">
          <ul className={`navbar-nav ${style['full-navbar']}`}>
            <li className={'nav-item'}>
              <Link className={`nav-link ${frontDeskActive}`} to={'/'} >
                <FormattedMessage id="frontDesk" />
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${inventoryActive}`} href="#" id="navbar-inventory" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FormattedMessage id="inventory" />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbar-inventory">
                <Link className="dropdown-item" activeClassName={'active'} to={'/inventory/item'} >
                  Item Lists
                </Link>
                <Link className="dropdown-item" activeClassName={'active'} to={'/inventory/category'} >
                  Category
                </Link>
              </div>
            </li>

            <li className={'nav-item ml-auto'}>
              <Link className="nav-link" activeClassName={'active'} to={'/setting'} >
                Setting
              </Link>
            </li>

            <li className={'nav-item'}>
              <Link className="nav-link" activeClassName={'active'} to={'/logout'} >
                Log Out
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;

/**
 * Root Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';

// Import Routes
import routes from './routes';

// import bootstrap js
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

// Base stylesheet
// import 'bootstrap/scss/_functions.scss';
// import 'bootstrap/scss/_variables.scss';
// import 'bootstrap/scss/_mixins.scss';
// import 'bootstrap/scss/_root.scss';
// import 'bootstrap/scss/_reboot.scss';
// import 'bootstrap/scss/_type.scss';
// import 'bootstrap/scss/_images.scss';
// import 'bootstrap/scss/_code.scss';
// import 'bootstrap/scss/_grid.scss';
// import 'bootstrap/scss/_tables.scss';
// import 'bootstrap/scss/_forms.scss';
// import 'bootstrap/scss/_buttons.scss';
// import 'bootstrap/scss/_transitions.scss';
// import 'bootstrap/scss/_dropdown.scss';
// import 'bootstrap/scss/_button-group.scss';
// import 'bootstrap/scss/_input-group.scss';
// import 'bootstrap/scss/_custom-forms.scss';
// import 'bootstrap/scss/_nav.scss';
// import 'bootstrap/scss/_navbar.scss';
// import 'bootstrap/scss/_card.scss';
// import 'bootstrap/scss/_breadcrumb.scss';
// import 'bootstrap/scss/_pagination.scss';
// import 'bootstrap/scss/_badge.scss';
// import 'bootstrap/scss/_jumbotron.scss';
// import 'bootstrap/scss/_alert.scss';
// import 'bootstrap/scss/_progress.scss';
// import 'bootstrap/scss/_media.scss';
// import 'bootstrap/scss/_list-group.scss';
// import 'bootstrap/scss/_close.scss';
// import 'bootstrap/scss/_modal.scss';
// import 'bootstrap/scss/_tooltip.scss';
// import 'bootstrap/scss/_popover.scss';
// import 'bootstrap/scss/_carousel.scss';
// import 'bootstrap/scss/_utilities.scss';
// import 'bootstrap/scss/_print.scss';
// import 'bootstrap/scss/bootstrap.scss';
// require('./Bootstrap.scss');
import './Bootstrap.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronRight, faEdit, faBackspace } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle, faChevronRight, faEdit, faBackspace)

export default function App(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

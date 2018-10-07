/* eslint-disable global-require */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Home from './modules/Home/Home';
// For cookie get and set
import { getStorage } from './helpers/cookie';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/Auth/pages/Login/Login');
  require('./modules/Auth/pages/Register/Register');
  require('./modules/Inventory/pages/Lists/Lists');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/\

function requireAuth(nextState, replace) {
  if (!getStorage('authorization')) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export default (
  <Router component={Home}>
    <Route path="/" component={App} onEnter={requireAuth}>
      <IndexRoute
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
          });
        }}
      />
      <Route
        path="/posts/:slug-:cuid"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
          });
        }}
      />

      <Route
        path="/nventory(/:page)(/:search)"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Inventory/pages/Lists/Lists').default);
          });
        }}
      />
    </Route>

    <Route path="/auth" component={Home}>
      <IndexRoute
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Auth/pages/Login/Login').default);
          });
        }}
      />

      <Route
        path="/register"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Auth/pages/Register/Register').default);
          });
        }}
      />
    </Route>
  </Router>
);

// const fakeAuth = {
//   isAuthenticated: getStorage('authorization') ? true : false
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/auth",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );


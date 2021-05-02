/* eslint-disable global-require */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Main from './modules/Main/Main';
import Auth from './modules/Auth/pages/Auth/Auth';
import MainDesk from './modules/FrontDesk/pages/MainDesk/MainDesk';
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
  require('./modules/Item/pages/ItemListPage/ItemListPage');
  require('./modules/Item/pages/ItemAddPage/ItemAddPage');
  require('./modules/Item/pages/ItemEditPage/ItemEditPage');
  require('./modules/Category/pages/CategoryListPage/CategoryListPage');
  require('./modules/Category/pages/CategoryAddPage/CategoryAddPage');
  require('./modules/Category/pages/CategoryEditPage/CategoryEditPage');
  require('./modules/Setting/pages/SettingPage/SettingPage');
  require('./modules/FrontDesk/pages/MainDesk/MainDesk');
  require('./modules/FrontDesk/pages/CategoryPage/CategoryPage');
  require('./modules/FrontDesk/pages/InventoryPage/InventoryPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/\

function requireAuth(nextState, replace) {
  console.log(getStorage('token'));
  if (!getStorage('token')) {
    replace({
      pathname: '/auth/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export default (
  <Router component={Main}>
    <Route path="/" component={App} onEnter={requireAuth}>
      {/* <IndexRoute
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/FrontDesk/pages/MainDesk/MainDesk').default);
          });
        }}
      /> */}
      <Route
        path="/home"
        component={MainDesk}
      >
        <IndexRoute
          getComponent={(nextState, cb) => {
            require.ensure([], require => {
              cb(null, require('./modules/FrontDesk/pages/CategoryPage/CategoryPage').default);
            });
          }}
        />
        <Route
          path="/home/:slug"
          getComponent={(nextState, cb) => {
            require.ensure([], require => {
              cb(null, require('./modules/FrontDesk/pages/InventoryPage/InventoryPage').default);
            });
          }}
        />
      </Route>
      <Route
        path="/posts/:slug-:cuid"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
          });
        }}
      />

      <Route
        path="/inventory/category"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Category/pages/CategoryListPage/CategoryListPage').default);
          });
        }}
      />
      <Route
        path="/inventory/category/add"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Category/pages/CategoryAddPage/CategoryAddPage').default);
          });
        }}
      />
      <Route
        path="/inventory/category/edit/:id"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Category/pages/CategoryEditPage/CategoryEditPage').default);
          });
        }}
      />
      <Route
        path="/inventory/item"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Item/pages/ItemListPage/ItemListPage').default);
          });
        }}
      />

      <Route
        path="/inventory/item/add"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Item/pages/ItemAddPage/ItemAddPage').default);
          });
        }}
      />
      <Route
        path="/inventory/item/edit/:id"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Item/pages/ItemEditPage/ItemEditPage').default);
          });
        }}
      />

      <Route
        path="/setting"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Setting/pages/SettingPage/SettingPage').default);
          });
        }}
      />

    </Route>

    <Route component={Auth}>
      <Route
        path="/auth/login"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Auth/pages/Login/Login').default);
          });
        }}
      />

      <Route
        path="/auth/register"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Auth/pages/Register/Register').default);
          });
        }}
      />
    </Route>
    <Route
      path="/logout"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/pages/Logout/Logout').default);
        });
      }}
    />
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


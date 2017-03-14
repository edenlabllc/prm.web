import React from 'react';
import ReactDOM from 'react-dom';
import CookieDough from 'cookie-dough';

import { useRedial } from 'react-router-redial';
import { browserHistory, Router, match, applyRouterMiddleware } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';

import i18nInstance from 'services/i18next';

import { configureStore } from 'store';
import { configureRoutes } from 'routes';
import { showLoading, hideLoading } from 'redux/loading';

import { hideAll } from 'components/Popup';
import WithStylesContext from '../common/WithStylesContext';

let reduxState = {};

if (window.__REDUX_STATE__) { // eslint-disable-line no-underscore-dangle
  try {
    reduxState = JSON.parse(unescape(__REDUX_STATE__));
  } catch (e) {} // eslint-disable-line
}

const store = configureStore({
  history: browserHistory,
  cookies: CookieDough(),
  i18n: i18nInstance,
}, reduxState);

const { dispatch, getState } = store;
const history = syncHistoryWithStore(browserHistory, store);
const trackPage = (route) => {}; // eslint-disable-line
const routes = configureRoutes({ store });

const locals = {
  // Allow lifecycle hooks to dispatch Redux actions:
  dispatch,
  getState,
};

/* eslint-disable no-underscore-dangle */
match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render((
    <I18nextProvider i18n={i18nInstance}>
      <WithStylesContext onInsertCss={styles => styles._insertCss()}>
        <Provider store={store}>
          <Router
            history={history}
            routes={routes}
            {...renderProps}
            render={applyRouterMiddleware(
              useRedial({
                locals,
                beforeTransition: ['fetch'],
                afterTransition: ['defer', 'done'],
                parallel: true,
                initialLoading: process.env.NODE_ENV === 'production' ? null : (() => <div>Loading...</div>),
                onStarted: () => {
                  store.dispatch(showLoading());
                },
                onCompleted: (transition) => {
                  store.dispatch([
                    hideLoading(),
                    hideAll(),
                  ]);
                  if (transition === 'beforeTransition') {
                    window.scrollTo(0, 0);
                  }
                },
                onAborted: () => {
                  store.dispatch(hideLoading());
                },
                onError: () => {
                  store.dispatch(hideLoading());
                },
              })
            )}
          />
        </Provider>
      </WithStylesContext>
    </I18nextProvider>
  ), document.getElementById('root'));
});

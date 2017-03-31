
import moment from 'moment';

let config = {};

if (global.__CLIENT__ && window && window.__CONFIG__) {
  try {
    config = JSON.parse(unescape(window.__CONFIG__));
  } catch (e) {} // eslint-disable-line
}

export const PORT = config.PORT || process.env.PORT || 8080;
export const HOSTNAME = typeof window !== 'undefined' ? window.location.origin : (config.HOSTNAME || 'http://localhost:8080');

export const API_HOST = 'http://localhost';
export const PRM_HOST = config.PRM_HOST || process.env.PRM_HOST || 'http://35.187.125.120/api';
export const MPI_HOST = config.MPI_HOST || process.env.MPI_HOST || 'http://35.187.87.147';

export const SITEMAP_HOSTNAME = process.env.SITEMAP_HOSTNAME || 'http://localhost:8080'; // used in sitemap
export const LANG_COOKIE_NAME = 'lang';
export const AUTH_COOKIE_NAME = 'authorization';

export const API_PROXY_PATH = '/api';
export const PRM_PROXY_PATH = '/api.prm';
export const MPI_PROXY_PATH = '/api.mpi';

export const PUBLIC_INDEX_ROUTE = '/';

// for internal app usage. for example for XHR requests or server side rendering
export const PRM_URL = typeof window !== 'undefined' ? PRM_PROXY_PATH : PRM_HOST;
export const MPI_URL = typeof window !== 'undefined' ? MPI_PROXY_PATH : MPI_HOST;
export const API_URL = typeof window !== 'undefined' ? API_PROXY_PATH : API_HOST;

moment.locale('uk');

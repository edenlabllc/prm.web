require('dotenv').config({ silent: true });
require('babel-register');
require('ignore-styles').default(['.scss', '.css', '.po', '.png', '.jpg', '.svg']);

global.__DEV__ = false; // eslint-disable-line
global.__CLIENT__ = false; // eslint-disable-line

require('./server');

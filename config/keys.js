// keys.js - figure out what set of credentials to return based on the environment
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // assume dev env - return the dev keys
  module.exports = require('./dev');
}

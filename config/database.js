const path = require('path');
const parse = require('pg-connection-string').parse;
module.exports = ({ env }) => {

  return {
    connection: {
      client: 'sqlite',
        connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  }
};

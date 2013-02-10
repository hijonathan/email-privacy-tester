var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL
  , client
  , query;

pg.connect(connectionString, function(err, client) {
	client.query('create table email (email_id serial);
}


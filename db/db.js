const { Client } = require('pg');

const connect = async () => {
  const client = new Client();
  await client.connect();
  const res = await client.query('SELECT $1::text as message', ['Nicely connected to PostgreSQL!']);
  console.log(res.rows[0].message); // Hello world!
  await client.end();
};
connect();

// const client = new Client({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })

// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

/////////////////////////////
////OR THROW THIS IN .ENV////
/////////////////////////////
// PGHOST='localhost'
// PGUSER=process.env.USER
// PGDATABASE=process.env.USER
// PGPASSWORD=null
// PGPORT=5432
/////////////////////////////





// const { Client } = require('pg')
// const client = new Client()
// client.connect()
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// })



// module.exports = connect;
const logQuery = async (client, query) => {
  try {
    await client.connect();
    const res = await client.query(query);
    console.log('Successfully executed : ', query);
    console.log(res.rows);
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
};

const returnQuery = async (client, query) => {
  await client.connect();
  const res = await client.query(query);
  return res;
  // let res;
  // try {
  //   await client.connect();
  //   res = await client.query(query);
  //   // console.log('Successfully executed : ', query);
  //   // console.log(res.rows);
  // } catch (err) {
  //   console.log(err);
  // } finally {
  //   client.end();
  // }
  // return res;
};

module.exports = {
  logQuery,
  returnQuery,
};
// const { Client } = require('pg');

// const client = new Client({
//   user: 'attack',
//   host: 'localhost',
//   // database: 'mytestdbfromapp',
//   // password: 'secretpassword',
//   port: 5432,
// });

// // const client = new Client();
// const connect = async () => {
//   await client.connect();
//   await console.log('Nice! You\'re connected to PostgreSQL...');
//   // const res = await client.query('SELECT $1::text as message', ['Nicely connected to PostgreSQL!']);
//   // console.log(res.rows[0].message); // Hello world!
//   await client.end();
// };
// // connect();

// // client.connect()

// // client.query('SELECT NOW()', (err, res) => {
// //   console.log(err, res)
// //   client.end()
// // })

// /////////////////////////////
// ////OR THROW THIS IN .ENV////
// /////////////////////////////
// // PGHOST='localhost'
// // PGUSER=process.env.USER
// // PGDATABASE=process.env.USER
// // PGPASSWORD=null
// // PGPORT=5432
// /////////////////////////////





// // const { Client } = require('pg')
// // const client = new Client()
// // client.connect()
// // client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
// //   console.log(err ? err.stack : res.rows[0].message) // Hello World!
// //   client.end()
// // })

// module.exports = {
//   client,
//   connect,
// };

const { Client } = require('pg');
const pg = require('./db.js');

const client = new Client({
  user: 'attack',
  host: 'localhost',
  database: 'trulia',
  port: 5432,
});
// client.connect();





const createHousesTableQuery = `
CREATE TABLE mothertable (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;

// testQuery(client, 'SELECT * FROM information_schema.tables');
const rq = pg.returnQuery(client, "SELECT * FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';");

console.log(rq);


const createTable = async (createTableQuery) => {
  await client.query(createTableQuery)
    .then(res => console.log('Table is successfully created'))
    .catch(err => console.error(err));
  await client.end();
};
// createTable(createHousesTableQuery);

// const conditionallyCreateTable = async (createTableQuery) => {
//   try {
//     await client.connect();
//     const dbResults = await client.query('SELECT * FROM information_schema.tables');
//     console.log(dbResults);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.end();
//   }
// };
// conditionallyCreateTable(createHousesTableQuery);

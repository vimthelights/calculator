// const { Client } = require('pg');

// const client = new Client({
//   user: 'attack',
//   host: 'localhost',
//   port: 5432,
// });

// const createDatabase = async (dbName, createDatabaseQuery) => {
//   try {
//     await client.query(createDatabaseQuery);
//     console.log(`...Successfully created ${dbName} db.`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const conditionallyCreateDb = async (dbName) => {
//   try {
//     await client.connect();
//     const dbResults = await client.query('SELECT * FROM pg_database');
//     const dbNames = dbResults.rows.map(obj => obj.datname);
//     if (dbNames.includes(dbName)) {
//       console.log(`WARNING : ${dbName} database already exists. Skipping db creation.`);
//     } else {
//       console.log(`Creating ${dbName} database...`);
//       const createDatabaseQuery = `CREATE DATABASE ${dbName};`;
//       await createDatabase(dbName, createDatabaseQuery);
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.end();
//   }
// };

// conditionallyCreateDb('trulia');

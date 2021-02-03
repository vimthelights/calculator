// https://stackabuse.com/using-postgresql-with-nodejs-and-node-postgres/

const query = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;

// client.query(query, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table is successfully created');
//   client.end();
// });

client.query()
  .query(query)
  .then(res => {
    console.log('Table is successfully created');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    client.end();
  });

// try {
//     const res = await client.query(query);
//     console.log('Table is successfully created');
// } catch (err) {
//     console.log(err.stack);
// } finally {
//     client.close();
// }
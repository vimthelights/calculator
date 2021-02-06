const { Client } = require('pg');

const client = new Client({
  user: 'attack',
  host: 'localhost',
  database: 'trulia',
  // password: 'secretpassword',
  port: 5432,
});
client.connect();

// HOMES
const getHome = async (id) => (
  client.query(`SELECT * FROM homes WHERE id=${id};`)
);

// TAXES
const getTaxes = async () => (
  client.query('SELECT * FROM taxes;')
);

const getTax = async (state) => (
  client.query(`SELECT * FROM taxes WHERE state_abr='${state}';`)
);

// LOANS
const getLoans = async () => (
  client.query('SELECT * FROM loans;')
);

module.exports = {
  getHome,
  getTaxes,
  getTax,
  getLoans,
};

const { Client, Pool } = require('pg');

  const client = new Client({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DB,
  });

//
// // LOCALHOST CONNECTION
//
// const client = new Client({
//   host: 'localhost',
//   port: 5432,
//   user: 'attack',
//   database: 'trulia'
// });


client.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to pg!')
  }
});

// HOMES
const getRandomHome = async () => {
  const randomHomeId = Math.floor(Math.random() * 10000000);
  return client.query(`SELECT * FROM homes WHERE id=${randomHomeId};`)
};

const getHome = async (id) => (
  client.query(`SELECT * FROM homes WHERE id=${id};`)
);

const postHome = async (row) => (
  client.query(`
    INSERT INTO homes
    (asking_price,address_line1,address_city,address_state,address_zip)
    VALUES
    (${row.asking_price}, '${row.address_line1 || ''}', '${row.address_city || ''}', '${row.address_state}', ${row.address_zip || 00000});`)
);

const patchHome = async (id, row) => {
  let q = [];
  for (const k in row) {
    if (k === 'address_line1' || k === 'address_city' || k === 'address_state') {
      q.push(`${k}='${row[k]}'`)
    } else {
      q.push(`${k}=${row[k]}`)
    }
  }
  q = `UPDATE homes SET ${q.join(', ')} WHERE id=${id}`;

  client.query(q);
  return q
};

const deleteHome = async (id) => (
  client.query(`DELETE FROM homes WHERE id=${id};`)
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
  client,
  getRandomHome,
  getHome,
  postHome,
  patchHome,
  deleteHome,
  getTaxes,
  getTax,
  getLoans,
};

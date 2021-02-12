const { Client, Pool } = require('pg');

// COPIED OVER FROM .ENV ~~~ DEV_DATABASE_URL = "postgres://attack@localhost:5432/trulia"
// const connectionString = process.env.PROD_DATABASE_URL || process.env.DEV_DATABASE_URL;


// const connectionString = "postgres://sdc_db_user:simplebutsecret@172.19.0.2:888/sdc_calculator_db"


// const client = new Client({
  //   connectionString,
  // })


  const client = new Client({
    // host: '71.202.124.117',
    // host: 5432,
    // host: '172.19.0.1',
    // host: '172.19.0.2',
    // host: 'public-ip-server',
    // host: 'localhost',
    host: '0.0.0.0',
    // host: 'postgres',
    // host: 'dockerized_pg',
    // host : 'b04e54ffc21e',
    // host: 'database_toaster_dockerized_pg_1',
    // host: '',
    // port: '888',
    port: 5432,
    user: 'sdc_db_user',
    password: 'simplebutsecret',
    database: 'sdc_calculator_db'
  })
  client.connect();


// const client = new Pool({
//   host: '172.19.0.2',
//   // host: "172.19.0.1",
//   // host: '0.0.0.0',
//   // host: "77aed7533cd3",
//   port: '888',
//   user: 'sdc_db_user',
//   password: 'simplebutsecret',
//   database: 'sdc_calculator_db'
// })
// client.connect()


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

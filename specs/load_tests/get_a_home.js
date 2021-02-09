import http from 'k6/http';
import { sleep } from 'k6';

// const db = require('../../db/pg_models/api');

// pick a random home to query
// db.client.connect();
// const randomHomeId = db.client.query('SELECT id FROM homes ORDER BY random() LIMIT 1;');
const randomHomeId = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;

export default function () {
  http.get(`http://localhost:3003/api/homes/${randomHomeId}`);
  // http.get(`http://localhost:3003/api/homes/444`);
  sleep(1);
}
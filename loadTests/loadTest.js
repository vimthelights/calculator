import http from 'k6/http';
import { check, group, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '25s', target: 50 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: '25s', target: 100 },
    { duration: '2m', target: 200 }, // stay at 100 users for 10 minutes
    // { duration: '30s', target: 300 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
    // 'status was 200': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'http://localhost:3003/api';

export default () => {
  const randomNumber = Math.floor(Math.random() * (10000000 - 1 + 1) + 1);
  const homeRes = http.get(`${BASE_URL}/homes/${randomNumber}`);
  check(homeRes, { 'status was 200': (r) => r.status === 200 });

  // let myObjects = http.get(`${BASE_URL}/my/crocodiles/`, authHeaders).json();
  // check(myObjects, { 'retrieved crocodiles': (obj) => obj.length > 0 });

  sleep(1);
};

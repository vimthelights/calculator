import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export let options = {
  vus: 2, // 1 user looping for 1 minute
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'http://localhost:3003/api/';

export default () => {
  const randomNumber = Math.floor(Math.random() * (10000000 - 1 + 1) + 1);
  const homesRes = http.get(`${BASE_URL}/homes/${randomNumber}`);
  check(homesRes, { 'status was 200': (r) => r.status === 200 });

  // let myObjects = http.get(`${BASE_URL}/my/crocodiles/`, authHeaders).json();
  // check(myObjects, { 'retrieved crocodiles': (obj) => obj.length > 0 });
  sleep(1);
};

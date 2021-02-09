import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '15s', target: 100 },
    { duration: '15s', target: 200 },
    // { duration: '15s', target: 400 },
    // { duration: '15s', target: 500 },
    // { duration: '15s', target: 600 },
    // { duration: '15s', target: 700 },
    // { duration: '15s', target: 800 },
    // { duration: '15s', target: 900 },
    // { duration: '15s', target: 1000 },
    // { duration: '15s', target: 500 },
    // { duration: '15s', target: 100 },
  ],
};

const randomHomeId = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;

export default () => {
  const BASE_URL = 'http://localhost:3003';
  const USE_URL = `${BASE_URL}/api/homes/${randomHomeId}`;
  console.log(USE_URL);

  let responses = http.batch([
    'GET',
    USE_URL,
    null,
  ]);
  check(http.get(url, params), {
    'status is 200': (r) => r.status == 200,
  }) || errorRate.add(1);
};

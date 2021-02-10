import http from 'k6/http';
import { check, sleep } from 'k6';

// export let options = {
//   stages: [
    // { duration: '60s', target: 250 }, // below normal load
    // { duration: '1m', target: 400 },
    // { duration: '30s', target: 1000 }, // normal load
    // { duration: '1m', target: 1000 },
    // { duration: '30s', target: 2000 }, // around the breaking point
    // { duration: '1m', target: 2000 },
    // { duration: '30s', target: 3000 }, // beyond the breaking point
    // { duration: '1m', target: 2000 },
    // { duration: '1m', target: 200 }, // scale down. Recovery stage.
//   ],
// };

export default function () {
  const randomNumber = Math.floor(Math.random() * (10000000 - 1 + 1) + 1);
  const homeRes = http.get(`http://localhost:3003/api/homes/${randomNumber}`);
  check(homeRes, { 'status was 200': (r) => r.status === 200 });

  // const state = homeRes.address_state;
  // const taxRes = http.get(`http://localhost:3003/api/taxes/${state}`);
  // check(taxRes, { 'status was 200': (r) => r.status === 200 });

  // const loansRes = http.get('http://localhost:3003/api/loans');
  // check(loansRes, { 'status was 200': (r) => r.status === 200 });

  sleep(1);
}

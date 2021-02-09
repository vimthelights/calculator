import http from 'k6/http';
import { check, sleep } from 'k6';
// export let options = {
//   scenarios: {
//     constant_request_rate: {
//       executor: 'constant-arrival-rate',
//       rate: 1000,
//       timeUnit: '1s',
//       duration: '30s',
//       preAllocatedVUs: 1376,
//       maxVUs: 2000,
//     },
//   },
// };
export let options = {
  stages: [
    { duration: '15s', target: 200 }, // below normal load
    { duration: '15s', target: 400 },
    { duration: '15s', target: 600 }, // normal load
    { duration: '30s', target: 200 }, // below normal load
    { duration: '1m', target: 400 },
    { duration: '30s', target: 1000 }, // normal load
    { duration: '1m', target: 1000 },
    { duration: '30s', target: 2000 }, // around the breaking point
    { duration: '1m', target: 2000 },
    { duration: '30s', target: 3000 }, // beyond the breaking point
    { duration: '1m', target: 2000 },
    { duration: '1m', target: 200 }, // scale down. Recovery stage.
  ],
};

export default function () {
  let randomNumber = Math.floor(Math.random() * (800000 - 1 + 1) + 1);
  let res = http.get(`http://localhost:3003/api/homes/${randomNumber}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
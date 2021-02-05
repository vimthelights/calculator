const faker = require('faker');
const csv = require('./csvUtils');

const start = new Date();
const generateHouseData = (n) => {
  const houses = [];
  for (let i = 0; i < n; i += 1) {
    houses.push({
      asking_price: Math.round(faker.finance.amount(95250, 10500000)),
      address_line1: faker.address.streetAddress(),
      address_city: faker.address.city(),
      address_state: faker.address.stateAbbr(),
      address_zip: faker.address.zipCode().slice(0, 5),
    });
  }
  return houses;
};
const numberToGenerate = 100000000;
generateHouseData(numberToGenerate);
const end = new Date();
const seconds = (end.getTime() - start.getTime()) / 1000;
const minutes = Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
csv.appendToCsv('./db/speed_tests.csv', ['houses', 'generate data', numberToGenerate, seconds, minutes]);

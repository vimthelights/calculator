const faker = require('faker');
const csv = require('./csvUtils');
const house = require('./seedHouses');
const numberToTest = 10000000;
// const numberToGenerate = 1000;
// const start = new Date();

// house.writeNRowsToCsv(
//   './db/houses.csv',
//   'asking_price,address_line1,address_city,address_state,address_zip\n',
//   numberToGenerate,
//   house.generateHouseRowAsCsvString,
// );

// const end = new Date();
// const seconds = (end.getTime() - start.getTime()) / 1000;
// const minutes = Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
// csv.appendToCsv('./db/speed_tests2.csv', ['houses', 'generate data', numberToGenerate, seconds, minutes]);

// ////////////////
// ////////V3//////
// ////////////////
// THIS ONE USES THE DRAIN EVENT
const timedHouseDataGeneration = async (
  writePath,
  headers,
  n,
  rowBuilder,
  resultsPath,
) => {
  const start = await new Date();
  await console.log('started at: ', start);
  await house.writeNRowsToCsv(
    writePath,
    headers,
    n,
    rowBuilder,
  );
  const end = await new Date();
  await console.log('ended at: ', end);

  const seconds = await (end.getTime() - start.getTime()) / 1000;
  const minutes = await (Math.round((seconds / 60) * 100) / 100).toFixed(2);
  await csv.appendToCsv(resultsPath, ['houses', 'generate data', n, seconds, minutes]);
};

timedHouseDataGeneration(
  './db/clean/houses.csv',
  'id,asking_price,address_line1,address_city,address_state,address_zip\n',
  numberToTest,
  house.generateHouseRowAsCsvString,
  './db/clean/data_generation_and_csv_write_speeds.csv',
);

// ////////////////
// ////////V2//////
// ////////////////

// const generateHouseData = (n) => {
//   const houses = [];
//   for (let i = 0; i < n; i += 1) {
//     houses.push({
//       asking_price: Math.round(faker.finance.amount(95250, 10500000)),
//       address_line1: faker.address.streetAddress(),
//       address_city: faker.address.city(),
//       address_state: faker.address.stateAbbr(),
//       address_zip: faker.address.zipCode().slice(0, 5),
//     });
//   }
//   return houses;
// };

// const timedHouseDataGeneration = async (n, resultsPath) => {
//   const start = await new Date();
//   await generateHouseData(n);
//   const end = await new Date();

//   const seconds = await (end.getTime() - start.getTime()) / 1000;
//   const minutes = await (Math.round((seconds / 60) * 100) / 100).toFixed(2);
//   await csv.appendToCsv(resultsPath, ['houses', 'generate data', n, seconds, minutes]);
// };

// timedHouseDataGeneration(
//   10000000,
//   './db/data_generation_speeds.csv',
// );

// // ////////////////
// // ////////V1//////
// // ////////////////
// const generateHouseData = (n) => {
//   const houses = [];
//   for (let i = 0; i < n; i += 1) {
//     houses.push({
//       asking_price: Math.round(faker.finance.amount(95250, 10500000)),
//       address_line1: faker.address.streetAddress(),
//       address_city: faker.address.city(),
//       address_state: faker.address.stateAbbr(),
//       address_zip: faker.address.zipCode().slice(0, 5),
//     });
//   }
//   return houses;
// };
// const numberToGenerate = 1;
// const start = new Date();
// generateHouseData(numberToGenerate);
// const end = new Date();
// const seconds = (end.getTime() - start.getTime()) / 1000;
// const minutes = Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
// csv.appendToCsv('./db/data_generation_speeds.csv', ['table', 'activity', 'number_of_records', 'seconds', 'minutes']);
// csv.appendToCsv('./db/data_generation_speeds.csv', ['houses', 'generate data', numberToGenerate, seconds, minutes]);

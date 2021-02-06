const faker = require('faker');
const fs = require('fs');
const bench = require('./bench');

const generateHouseRowAsCsvString = () => (
  `${[
    Math.round(faker.finance.amount(95250, 10500000)),
    faker.address.streetAddress(),
    faker.address.city(),
    faker.address.stateAbbr(),
    faker.address.zipCode().slice(0, 5),
  ].join(',')}\n`
);

const writeNRowsToCsv = async (filePath, headers, n, rowBuilder) => {
  const writer = await fs.createWriteStream(filePath);
  await writer.write(headers, 'utf-8');

  let i = 0;
  const write = () => {
    let proceed = true;
    do {
      i += 1;
      if (i === n - 1) {
        writer.write(`${i},${rowBuilder()}`, 'utf-8', () => writer.end());
        // writer.write(`${rowBuilder()}`, 'utf-8', () => writer.end());
      } else {
        proceed = writer.write(`${i},${rowBuilder()}`, 'utf-8');
      }
    } while (i < n && proceed);
    if (i < n) {
      writer.once('drain', write);
    }
  };
  write();
};

// const timedWriter = bench.timeCsvRowWriting(writeNRowsToCsv, './db/speed_tests2.csv');
// timedWriter(
//   './db/houses.csv',
//   'asking_price,address_line1,address_city,address_state,address_zip\n',
//   10000000,
//   generateHouseRowAsCsvString,
// );

// const records = 100000;
// const timedWriter = bench.timeAnythingAndStoreToCsv(
//   writeNRowsToCsv,
//   './db/speed_tests3.csv',
//   'generate fake data',
//   'houses',
//   records,
// );

// timedWriter(
//   './db/houses.csv',
//   'asking_price,address_line1,address_city,address_state,address_zip\n',
//   records,
//   generateHouseRowAsCsvString,
// );

module.exports = {
  generateHouseRowAsCsvString,
  writeNRowsToCsv,
};

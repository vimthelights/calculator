const faker = require('faker');
const fs = require('fs');
const neatCsv = require('neat-csv');

const encoding = 'utf-8';

const writeRowsFromArray = (csvPath, headers, rows) => {
  const stream = fs.createWriteStream(csvPath);
  stream.write(headers);
  rows.forEach((r) => {
    stream.write(`${r}\n`, encoding);
  });
  stream.end();
};

const writeNRows = (stream, n, dataFunc, cb) => {
  let i = n;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = dataFunc(id);

      if (i % 100000 === 0) {
        console.log(`<~~ 100,000 rows ~ ${i} to go ~~>`);
      }
      if (i === 0) {
        stream.write(data, encoding, cb);
      } else {
        ok = stream.write(data, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      stream.once('drain', write);
    }
  };
  write();
};

// HOUSES //
const generateHouse = () => (
  `${[
    Math.round(faker.finance.amount(95250, 10500000)),
    faker.address.streetAddress(),
    faker.address.city(),
    faker.address.stateAbbr(),
    faker.address.zipCode().slice(0, 5),
  ].join(',')}\n`
);
const writeHouses = fs.createWriteStream('./db/seed/csvs/homes.csv');
writeHouses.write('asking_price,address_line1,address_city,address_state,address_zip\n', encoding);

const housesToSeed = 100;
writeNRows(writeHouses, housesToSeed, generateHouse, encoding, () => { writeHouses.end(); });

// TAXES //
fs.readFile('./db/seed/state_abbreviations.csv', async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const rows = await neatCsv(data);
  const states = await rows.map((row) => (`${Object.values(row)[0]},${faker.finance.amount(0.27, 2.47, 2)}`));
  writeRowsFromArray('./db/seed/csvs/taxes.csv', 'state,effective_rate\n', states);
});

// LOANS //
const loans = [
  '30-year fixed,30,3.38',
  '20-year fixed,20,3.47',
  '15-year fixed,15,3.04',
  '10-year fixed,10,3.37',
  'FHA 30-year fixed,30,0.00',
  'FHA 15-year fixed,15,0.00',
  'VA 30-year fixed,30,2.90',
  'VA 15-year fixed,15,0.00',
];
writeRowsFromArray('./db/seed/csvs/loans.csv', 'name,years,interest_rate\n', loans);

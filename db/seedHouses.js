const faker = require('faker');
const fs = require('fs');
// const csv = require('./csvUtils');

// const generateHouseRow = () => (
//   {
//     asking_price: Math.round(faker.finance.amount(95250, 10500000)),
//     address_line1: faker.address.streetAddress(),
//     address_city: faker.address.city(),
//     address_state: faker.address.stateAbbr(),
//     address_zip: faker.address.zipCode().slice(0, 5),
//   }
// );
// console.log(generateHouseRow());

// const generateHouseRowAsArray = () => (
//   [
//     Math.round(faker.finance.amount(95250, 10500000)),
//     faker.address.streetAddress(),
//     faker.address.city(),
//     faker.address.stateAbbr(),
//     faker.address.zipCode().slice(0, 5),
//   ]
// );
// console.log(generateHouseRowAsArray());

const generateHouseRowAsCsvString = () => (
  `${[
    Math.round(faker.finance.amount(95250, 10500000)),
    faker.address.streetAddress(),
    faker.address.city(),
    faker.address.stateAbbr(),
    faker.address.zipCode().slice(0, 5),
  ].join(',')}\n`
);
// console.log(generateHouseRowAsCsvString());

// const generateNRows = (n, rowBuilder) => {
//   for (let i = 0; i < n; i += 1) {
//     console.log(rowBuilder());
//   }
// };
// generateNRows(100, generateHouseRowAsCsvString);

///////////////////
//THIS WORKS///////
///////////////////
// const writeNRowsToCsv = async (filePath, headers, encoding, n, rowBuilder) => {
//   const writer = await fs.createWriteStream(filePath);
//   await writer.write(headers, encoding);

//   for (let i = 0; i < n; i += 1) {
//     // writer.write(rowBuilder(), encoding);
//     const result = await writer.write(`${i + 1},${rowBuilder()}`, encoding);
//     console.log(result);
//   }

//   writer.end();
// };
// writeNRowsToCsv(
//   './db/building.csv',
//   'asking_price,address_line1,address_city,address_state,address_zip\n',
//   'utf-8',
//   250,
//   generateHouseRowAsCsvString,
// );

///////////////////
//THIS WORKS///////
///////////////////
// const writeNRowsToCsv = async (filePath, headers, n, rowBuilder) => {
//   const writer = await fs.createWriteStream(filePath);
//   await writer.write(headers, 'utf-8');

//   let i = n;
//   const write = () => {
//     let proceed = true;
//     do {
//       i -= 1;
//       if (i === 0) {
//         writer.write(`${i + 1},${rowBuilder()}`, 'utf-8', () => writer.end());
//       } else {
//         proceed = writer.write(`${i + 1},${rowBuilder()}`, 'utf-8');
//       }
//     } while (i > 0 && proceed);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   };
//   write();
// };

// writeNRowsToCsv(
//   './db/building.csv',
//   'asking_price,address_line1,address_city,address_state,address_zip\n',
//   250,
//   generateHouseRowAsCsvString,
// );

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

writeNRowsToCsv(
  './db/building.csv',
  'asking_price,address_line1,address_city,address_state,address_zip\n',
  25,
  generateHouseRowAsCsvString,
);
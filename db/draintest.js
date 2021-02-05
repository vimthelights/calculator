const faker = require('faker');
const fs = require('fs');

// const writeUsers = fs.createWriteStream;
const writeUsers = fs.createWriteStream('./db/dataName.csv');
// writeUsers.write('id,username,avatar\n', 'utf8');

const writeNumberOfUsers = async (
  // filePath,
  headers,
  numberOfRecords,
  encoding,
  writer,
  callback,
) => {
  // await writer('./db/dataName.csv');
  await writer.write(headers, encoding);
  let i = numberOfRecords;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const username = faker.internet.userName();
      const avatar = faker.image.avatar();
      const data = `${id},${username},${avatar}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
};

writeNumberOfUsers('id,username,avatar\n', 1000, 'utf8', writeUsers, () => {
  writeUsers.end();
});

/////////////////////////////
/////////////////////////////
//TRYING TO BUILD SCALABLE LIBRARY//////////
/////////////////////////////
/////////////////////////////
// const writeRows = async (filePath, numberOfRecords, encoding) => {
//   const writer = await fs.createWriteStream(filePath);
//   await writer.write('id,username,avatar\n', encoding);
//   let i = numberOfRecords;
//   let id = 0;
//   const write = async () => {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const username = faker.internet.userName();
//       const avatar = faker.image.avatar();
//       const data = `${id},${username},${avatar}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, writer.end());
//       } else {
//       // see if we should continue, or wait
//       // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//     // had to stop early!
//     // write some more once it drains
//       writer.once('drain', write);
//     }
//   };
//   await write();
//   writer.end();
// };
// writeRows('./db/users.csv', 1, 'utf-8');

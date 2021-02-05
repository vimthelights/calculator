const fs = require('fs');

const createCsv = (filePath, headers) => {
  fs.writeFile(
    filePath,
    headers.join(','),
    // { flag: 'a+' },
    (err) => { console.log(err || 'done'); },
  );
};
// createCsv('./db/speed_tests.csv', ['table', 'action', 'number_of_records_seeded', 'seconds_to_seed', 'minutes_to_seed']);

const appendToCsv = (filePath, row) => {
  fs.writeFile(
    filePath,
    `\n ${row.join(',')}`,
    { flag: 'a' },
    (err) => { console.log(err || '==== ===='); },
  );
};

module.exports = {
  appendToCsv,
};

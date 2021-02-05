const CSV = require('./csvUtils');

const timeAnything = (func) => (
  async (...rest) => {
    const start = await new Date();
    await func(...rest);
    const end = await new Date();
    const seconds = await (end.getTime() - start.getTime()) / 1000;
    const minutes = await Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
    console.log('Run took ', seconds, 'secs');
    console.log('       = ', minutes, 'mins');
  }
);

const timeCsvRowWriting = (func) => {
  let rows;
  return (
    async (...rest) => {
      rows = rest[2];
      const start = await new Date();
      await func(...rest);
      const end = await new Date();
      const seconds = await (end.getTime() - start.getTime()) / 1000;
      const minutes = await Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
      CSV.appendToCsv(
        './db/speed_tests2.csv',
        ['houses', 'generate data', rows, seconds, minutes],
      );
      console.log('==== ====');
      console.log('Run took ', seconds, 'secs');
      console.log('       = ', minutes, 'mins');
    }
  );
};

module.exports = {
  timeAnything,
  timeCsvRowWriting,
};

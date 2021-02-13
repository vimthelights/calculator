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

const timeCsvRowWriting = (func, pathToMetricsCsv) => {
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
        pathToMetricsCsv,
        ['houses', 'generate data', rows, seconds, minutes],
      );
      console.log('==== ====');
      console.log('Run took ', seconds, 'secs');
      console.log('       = ', minutes, 'mins');
    }
  );
};

const timeAnythingAndStoreToCsv = (func, csvPath, action, table, numberOfRecords) => {
  const timedFunction = async (...rest) => {
    const start = await new Date();
    await func(...rest);
    const end = new Date();
    const seconds = (end.getTime() - start.getTime()) / 1000;
    console.log(seconds);
    const minutes = Math.round(((seconds / 60) + Number.EPSILON) * 100) / 100;
    CSV.appendToCsv(
      csvPath,
      [action, table, numberOfRecords, seconds, minutes],
    );

    // console.log('Run took ', seconds, 'secs');
    // console.log('       = ', minutes, 'mins');
  };
  return timedFunction;
};

module.exports = {
  timeAnything,
  timeCsvRowWriting,
  timeAnythingAndStoreToCsv,
};

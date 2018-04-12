'use strict';

Promise.all([
])
  .then(() => {
    require('./app').listen(9999);
    console.log('started');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

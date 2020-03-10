const fs = require('fs');

const readDir = () => {
  return new Promise((resolve, reject) => {
    fs.readdir('/', (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

readDir()
  .then(result => console.log(result))
  .catch(err => console.log(err));

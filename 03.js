const promises = [];

const asyncFunc = index => {};

for (let i = 1; i <= 3; i++) {
  promises.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    })
  );
}

Promise.all(promises).then(result => {
  result.forEach(el => {
    console.log(el);
  });

  console.log('Done');
});

function sleep(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}

Promise.allSettled([sleep(2), sleep(3), sleep(4)])
.then(function (data) {
  console.log(data);
}).catch(function(e) {
  console.error(e);
});

反復可能
非同期処理を並列で処理
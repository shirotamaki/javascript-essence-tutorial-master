function sleep (callback, val) {
  setTimeout(function () {
    console.log(val++)
    callback(val)
  }, 5000)
}

sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {
      sleep(function (val) {

      }, val)
    }, val)
  }, val)
}, 0)

// 実行結果
// 0
// 1
// 2
// 3

function callback(data) {
  console.log(data)
}

function something(id, callback) {
  const result = `${id}`
  callback(result)
}

something('ttt', callback)
![image.png](https://bootcamp.fjord.jp/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN04yQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a40c7831efa3cd9c1b5cc4e566e7fe13858dc899/image.png)
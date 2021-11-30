new Promise(function (reject,resolve) {
  console.log('promise')
  // reject("bye");
  resolve('hello')
}).then(function (data) {
  console.log('then:' + data)
  // throw new Error();
  return data
}).then(function (data) {
  console.log('then:' + data)
  return data
}).catch(function (data) {
  console.log('catch:' + data)
}).finally(function () {
  console.log('finally')
})

console.log('global end')

//実行結果
// promise
// main.js:20 global end
// main.js:8 then:hello
// main.js:12 then:hello
// main.js:17 finally
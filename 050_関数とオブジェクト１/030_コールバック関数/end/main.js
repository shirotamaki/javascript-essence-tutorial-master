function hello(name) {
    console.log('hello ' + name);
}

// function bye() {
//     console.log('bye');
// }
//
function fn(cb) {
    cb();
    console.log('hi')
}

// fn(hello);
// fn(bye);
fn(function(name) {
    console.log('hello ' + name);
});
//
setTimeout(hello('ggg'), 2000);
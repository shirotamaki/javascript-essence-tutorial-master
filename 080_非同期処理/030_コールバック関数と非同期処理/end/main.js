function a(x) {
  setTimeout(function task1() { 
    b();
    console.log('task1 done');
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a(b);

// b();
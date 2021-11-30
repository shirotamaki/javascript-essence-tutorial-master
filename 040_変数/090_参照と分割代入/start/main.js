const a = {
  // プロパティのprop
  prop: 0
}

// 変数のporp
let { prop } = a;

prop = 1;

console.log(a, prop)



function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop);
}

fn(a);


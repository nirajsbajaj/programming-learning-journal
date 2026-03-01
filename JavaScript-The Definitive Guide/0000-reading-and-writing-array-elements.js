let a = ["world"];
let value = a[0];
console.log(value);//"world"

a[1] = 3.14;
console.log(a);//["world",3.14]

let i = 2;
a[i] = 3;
a[i + 1] = "hello";
console.log(a);//["world", 3.14, 3, "hello"]

let wow = a[a[i]];
console.log(wow);//"hello"

a[a[i]] = a[0];
console.log(a[a[i]]);
console.log(a);//["world", 3.14, 3, "world"]

a[-1.23] = true;
console.log(a);
console.log(a["-1.23"]);

a["10"] = 'ten';
console.log(a.length); //11
console.log(a[6]); // undefined?
console.log(a[10]); // ten
console.log(a); // ['world', 3.14, 3, 'world',,,,,,,'ten', '-1.23' : 'ten']

let oh = {};
oh[1] = 'one';
oh["one"] = 'anotherOne';
console.log(oh); //{"1": "one", one : 'anotherOne' }
console.log(oh["1"]);// one
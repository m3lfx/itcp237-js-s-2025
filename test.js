console.log('hello world');
var today = new Date();
console.log(today.getDate()); //4
console.log(today.getMonth()); //
console.log(today.getFullYear()); //2020
console.log(today.getHours()); //23
console.log(today.getMinutes()); //13
console.log(today.getSeconds());

// var start = Date.now();
// loop for a long time
// for (var i=0; i<100000; i++) ;
// var end = Date.now();
// var elapsed = end - start; // elapsed time in milliseconds
// console.log(elapsed);
// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s);

var objString = new String("1" + "2"); //Creates a String object
console.log(typeof objString);
console.log(objString)

console.log("Hello".length); //5
console.log("Hello".charAt(0)); //"H"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".indexOf("e")); //1
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("X"));
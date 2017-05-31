var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);
// 1024
//it stops when counter = 10

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;

console.log(result);
//1024
//same as above but using "for"
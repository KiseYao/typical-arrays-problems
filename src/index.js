exports.min = function min (array) {
if (array==undefined || array.length == 0) return 0;
let result = array[0];
for (let num of array) {
if (result<=num) continue;
result = num;
}
return result;
}

exports.max = function max (array) {
if (array==undefined || array.length == 0) return 0;
let result = array[0];
for (let num of array) {
if (result>=num) continue;
result = num;
}
return result;
}

exports.avg = function avg (array) {
if (array==undefined || array.length == 0) return 0;
let result = 0;
for (let num of array) {
result += num;
}
return result/(array.length);
}

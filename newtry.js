// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the fp build for immutable auto-curried iteratee-first data-last methods.
var _ = require('lodash/fp');

// Load a method category.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
var chunk = require('lodash/chunk');
var extend = require('lodash/fp/extend');
var collection = require('lodash/collection');



console.log("Max value is: "+_.max([4, 2, 8, 6]));


console.log("Mean value is: "+_.mean([4, 2, 8, 6]));


console.log("clamp number"+_.clamp(-10, -5, 5));
// → -5


console.log("in range "+_.inRange(5,4));
// → true

 console.log("in range "+_.inRange(4,5,8));
// // true
// console.log("in range "+_.inRange(4,2));

// → false


// → true

// → 5

// var arr=[1,2,3,4,5];
// console.log(array.chunk((arr), 3));


// var ownerArr = [{
//     "owner": "Colin",
//     "pets": [{"name":"dog1"}, {"name": "dog2"}]
// }, {
//     "owner": "John",
//     "pets": [{"name":"dog3"}, {"name": "dog4"}]
// }];

// // Array's map method.
// ownerArr.map(function(owner){
//    return owner.pets[0].name;
// });

// // Lodash
//  console.log(collection.map(ownerArr, 'pets[0].name'));


 
 
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// console.log("other array  "+other);
// // → [1, 2, 3, [4]]

// console.log(array);
// // → [1]


// var users = [
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ];

// console.log(_.dropWhile(users, function(o) { return !o.active; }));
// // → objects for ['pebbles']

// // The `_.matches` iteratee shorthand.
// console.log(_.dropWhile(users, { 'user': 'barney', 'active': false }));
// // → objects for ['fred', 'pebbles']

// // The `_.matchesProperty` iteratee shorthand.
// console.log(_.dropWhile(users, ['active', false]));
// // → objects for ['pebbles']

// // The `_.property` iteratee shorthand.
// console.log(_.dropWhile(users, 'active'));
// // → objects for ['barney', 'fred', 'pebbles']

// _.defer(function(stamp) {
//   console.log(_.now() - stamp);
// }, _.now());
// // → logs the number of milliseconds it took for the deferred function to be invoked



// var a = [1, [2, [3, [4]], 5]];

// console.log(array.flattenDepth(a, 1));
// // → [1, 2, [3, [4]], 5]

// console.log(array.flattenDepth(a, 8));
// → [1, 2, 3, [4], 5]
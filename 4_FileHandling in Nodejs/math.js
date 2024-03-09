function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };  // this is a single export ,use object to export mutiple functions b/c if you do it one bye one it will overwrite the previous one


//multiple exports
// exports.add = (a, b) => {
//   return a + b;
// };
// exports.sub = (a, b) => {
//   return a - b;
// };

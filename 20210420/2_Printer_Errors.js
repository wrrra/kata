// my solutions
function printerError(s) {
  return `${s
    .split("")
    .reduce(
      (acc, curr) =>
        acc + (109 >= curr.charCodeAt(0) && curr.charCodeAt(0) >= 97 ? 0 : 1),
      0
    )}/${s.length}`;
}

// using regex
function printerError(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}

// using regex 2
// const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// simplier
function printerError(s) {
  // your code
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
// describe("printerError",function() {
//     it("Basic tests",function() {
//         var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//         Test.assertEquals(printerError(s), "3/56")
//     })})

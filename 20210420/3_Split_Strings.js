// const { assert } = require('chai');

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });

function solution(str) {
  return (str.match(/..?/g) || []).map((el) => (el.length < 2 ? el + "_" : el));
}

// more simple
// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
//  }

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));

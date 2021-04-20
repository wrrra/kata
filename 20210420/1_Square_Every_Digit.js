function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((el) => Math.pow(el, 2))
      .join("")
  );
}

console.log(squareDigits(3212));
// 9414
console.log(squareDigits(2112));
// 4114
console.log(squareDigits(0));
// 0

console.log(String.fromCharCode(189, 43, 190, 61));
console.log("a".charCodeAt(0), "m".charCodeAt(0));

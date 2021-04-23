var moveZeros = function (arr) {
    return arr.reduceRight((accu, el, idx) => {
        if(el === 0){
            accu.push(el)
        }else {
            accu.unshift(el)
        }
        return accu
    },[])
}

//other solutions
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]),[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
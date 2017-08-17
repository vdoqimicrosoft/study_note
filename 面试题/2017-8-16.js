// documen.write和 innerHTML的区别
// document.write只能重绘整个页面
// innerHTML可以重绘页面的一部分


/*----------------------------------------------------------------------*/

// 判断一个质数， 考察：js不能信任传递来的数据类型。如果面试官没有明确地告诉你，你应该询问他是否需要做输入检查，还是不进行检查直接写函数。严格上说，应该对函数的输入进行检查。
function isPrime(number) {
  // Number.isInteger() 方法用来判断给定的参数是否为整数。
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) return false;

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  // Math.sqrt() 函数返回一个数的平方根
  var squareRoot = Math.sqrt(number);
  // for (var i = 3; i <= squareRoot; i += 2) {
  if (number % squareRoot === 0) return false
  // }
  return true;
}

console.log(isPrime(7))


/*----------------------------------------------------------------------*/
// 问执行完毕后 x, y, z 的值分别是多少？
// 考察 函数声明，函数的返回i值
var x = 1, y = z = 0;

function add(n) {
  n = n + 1;
  // return n  函数应该有返回值
}
y = add(x);

function add(n) {
  n = n + 3;
}
z = add(x);


/*----------------------------------------------------------------------*/



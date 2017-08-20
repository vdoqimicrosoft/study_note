//遍历 DOM 树 （淘宝或腾讯页面有多少个dom节点）
//方案1：递归模式
function walkDom(node, callback) {
  if (node === null) return

  callback(node)

  // 返回对象的第一个孩子 Element, 如果没有子元素，则为null。
  node = node.firstElementChild

  while (node) {
    walkDom(node, callback)

    //  nextElementSibling 返回当前元素在其父元素的子元素节点中的后一个元素节点,
    // 如果该元素已经是最后一个元素节点,则返回null,该属性是只读的.
    node = node.nextElementSibling
  }
}

walkDom(document, function (node) {  //包含document节点
  console.count()
})


//数量比上面输出的少1，因为不包含document节点
document.querySelectorAll('*').length

/*----------------------------------------------------*/

//方案2：循环模式
function walkDom2(node, callback) {
  if (node === null) return

  var stack = [node]          //存入数组
  var target

  while (stack.length) {     //数组长度不为0，继续循环
    target = stack.shift()   //取出元素
    callback(target)         //传入callback
    //将其子元素一股脑推入stack，增加长度
    Array.prototype.push.apply(stack, target.children)
  }
}

walkDom2(document, function (node) {
  console.count()
})
document.querySelectorAll('*').length
//在循环模式中，shift方法可以换成pop，从尾部取出元素；push方法可以换成unshift从头部添加元素
//不同的顺序，影响了是「广度优先」还是「深度优先」。
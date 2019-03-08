const phoneNum = '18049459509'
let j = JSON.parse(phoneNum)
// console.log(typeof j)
let a = []
let i=0
function test() {
  if(a.length===0){
    a.push({
      i: i,
      info: '其他'
    })
    // console.log('if')
    return 'if'
  } else{
    a.forEach(item=> {
      if(i===item.i){
        // console.log('已经有'+i)
        return '已经有'
      } else{
        a.push({
          i: i+1,
          info: '其他'
        })
      }
    })
    return 'else'
    // console.log('else')
  }
}
// test()
// console.log(test())

let obj = {
  a:1,
  b:2
}
function f() {
  if(obj){
    return 'obj'
  }
  else if(obj.a===1){
    return 'obj.a'
  }
}
// console.log(f())

let arr = [
  {
    a:1,
    b:2
  }
]
// for ( let i of arr){
//   console.log(i,'key')
//   console.log(arr[i],'val')
// }
function f1() {
  let a =1
  //  function f3() {
     return a
  // }
  // return f3
}
// let tt= f1()
console.log(f1())
let f2 = ()=> 2
// console.log(f2())
export function debounce(func,delay = 300) {
  let timer = null
  console.log(111);
  return function(...args) {
   if(timer)  clearTimeout(timer)
   timer = setTimeout(()=>{
     func.apply(this,args)
   },delay)
  }
}
    //封装防抖函数
    
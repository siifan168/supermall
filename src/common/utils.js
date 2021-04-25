
//封装防抖函数
export function debounce(func, delay = 300) {
  let timer = null
  console.log(111);
  return function(...args) {
   if(timer)  clearTimeout(timer)
   timer = setTimeout(()=>{
     func.apply(this,args)
   },delay)
  }
}
 
//封装节流函数
export function throttling(fn, delay = 300) {
  let timer = null
  let context, args

  let run = () => {
    timer = setTimeout(() => {
      fn.apply(context, args)
      clearTimeout(timer)
      timer = null
    },delay)
  }

  return function () {
    context = this
    args = arguments
    if (!timer) {
      run()
    }
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) { //RegExp.$1是匹配到的结果，yyyy
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let i in o) {
    if (new RegExp('(${i})').test(fmt)) {
      let str = o[i] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
  }
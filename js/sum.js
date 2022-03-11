// Point 1-2

const sum  = function (a) {
  if (typeof(a)==='function' || a===null || a===NaN || typeof(a)==='string') {
    return 'Please enter a number'
  } else if (a===undefined) { return 0 }
  return function (b) {
    if (typeof(b)==='function' || b===undefined || b===null) {
      return a;
    }else{
      return sum(a+b)
    }
  }
}

module.exports = sum;
const sum  = function (a) {
  if (typeof(a)==='function') {
    return 0
  }
  return function (b) {
    if (typeof(b)==='function') {
      return b(a);
    }else{
      return sum(a+b);
    }
  }
};

sum(2)(result=> {console.log('->: ',result)})
sum(2)(2)(result=> {console.log('->: ',result)})
sum(2)(9)(result=> {console.log('->: ',result)})
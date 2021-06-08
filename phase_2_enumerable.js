Array.prototype.myEach = function (callback){
  for(el of this){
    callback(el)
  }
}


function myEachCallback(el){
  console.log(el*2)
}

Array.prototype.myMap = function (callback){
  result = []
  for(el of this){
    result.push(callback(el))
  }
  return result
}

function myMapCallback(el){
  return el*2
}

Array.prototype.myReduce = function(callback,acc = this[0]){
  for(el of this){
    acc = callback(acc,el)
  }
  console.log(acc)
}

function myReduceCallback(acc,el){
  return acc * el
}


Array.prototype.uniq = function(){
  result = new Set(this)
  return Array.from(result)
}

Array.prototype.twoSum = function(){
  result = []
  for(let i = 0; i<this.length-1;i++){
    for(let j = i+1; j<this.length;j++){
      if(this[i]+this[j] === 0){result.push([i,j])}
    }
  }
  return result
}

Array.prototype.transpose = function(){
  let result = []
  const that = this
  for(let i = 0;i<that[0].length;i++){
    result.push(new Array(that.length));
  }
  for(let i = 0; i<that.length; i++){
    for(let j = 0; j<that[0].length; j++){
      result[j][i] = that[i][j];
    }
  }
  return result
}


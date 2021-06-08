Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i],this[i+1]] = [this[i+1],this[i]]
        sorted = false;
      }
    }
  }
};

const testArray = [5, 3, 2, 7, 8, 5, 4, 8, 9, 7];


String.prototype.substrings = function (){
  result = []
  for(let i = 0; i<this.length;i++){
    for(let j = i+1; j<=this.length;j++){
      result.push(this.slice(i,j))
    }
  }
  return result
}
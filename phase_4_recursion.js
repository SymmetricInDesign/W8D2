function range(start,end){
  if(start === end){return [start]}
  return [start].concat(range(start+1,end))
}

function sumRec(arr){
  if(arr.length === 1){return arr[0]}
  return arr.pop() + sumRec(arr)
}

function exponent(base,exp){
  if(exp === 0){return 1}
  return base * exponent(base,exp-1)
}

function expo(base,exp){
  if(exp === 0){return 1}
  if(exp%2 === 0){
    let x = expo(base,exp/2)
    return x * x
  }
  else {
    let x = expo(base,(exp-1)/2)
    return base * x * x
  }
}

function fib(n){
  if (n < 0){return}
  if (n === 1){return [1]}
  if (n === 2){return [1,1]}
  let subSeq = fib(n-1)
  subSeq.push(subSeq[subSeq.length-1]+subSeq[subSeq.length-2])
  return subSeq
}
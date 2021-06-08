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

var objIdMap=new WeakMap, objectCount = 0;
function objectId(object){
  if (!objIdMap.has(object)) objIdMap.set(object,++objectCount);
  return objIdMap.get(object);
}



function deepDup(arr){
  if (!(arr instanceof Array)){return arr}
  let dupedArr = []
  // debugger
  arr.forEach( (el) =>{
    dupedArr.push(deepDup(el))
  }
  )


  return dupedArr
}

function bsearch(arr, target){
  let index = -1
  if (target > arr[arr.length-1]){return -1}
  if (arr.length === 1 && target != arr[0]){return -1}
  let mid_idx = Math.floor(arr.length/2)
  if (arr[mid_idx] === target){return mid_idx}
  if (arr[mid_idx] > target){
    index = bsearch(arr.slice(0,mid_idx),target)
    if (index == -1){return -1}
  } else {
    result = bsearch(arr.slice(mid_idx + 1, arr.length), target)
    if (result == -1){return -1} 
    index = result + mid_idx + 1
  }
  return index
}

function mergesort(arr){
  if (arr.length < 2){return arr}
  let mid_idx = Math.floor(arr.length/2)
  let left = arr.slice(0,mid_idx)
  let right = arr.slice(mid_idx)
  return merge(mergesort(left), mergesort(right))
}

function merge(arr1, arr2){
  let result = []
  while (arr1.length > 0 && arr2.length > 0){
    if (arr1[0] > arr2[0]){
      result.push(arr2.shift())
    }else {
      result.push(arr1.shift())
    }
  }
  return result.concat(arr1).concat(arr2)
}

function subsets(arr){
  if (arr.length < 2){return [arr]}
  let subs = []
  for(let i=1; i< arr.length+1;i++){
    subs.push( arr.slice(0,i) )
  }
  return subs.concat(subsets(arr.slice(1)))

}
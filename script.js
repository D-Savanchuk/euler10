//O(N^2)

function isPrime(count) {
  console.time("TIME");
  let sum = 2;
  for(let n = 3; n< count; n++){
  let i = 2;
  let limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      limit = 0;
      break;
    }
    i +=1;
  }

  if(limit!=0){
    sum+=n;
  }
}
console.log(sum)
console.timeEnd("TIME");
}

isPrime(2000000);
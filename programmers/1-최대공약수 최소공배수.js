function solution(n, m) {
  const arr = [];
  const newArr = [];
  for (let i = 1; i <= n * m; i++) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
    }
  }
  newArr.push(arr[arr.length - 1]);
  newArr.push((n * m) / newArr[0]);
  return newArr;
}

console.log(solution(3, 12));
console.log(solution(2, 5));

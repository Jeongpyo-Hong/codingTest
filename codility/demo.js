function solution(A) {
  // Implement your solution here
  const arr = A.sort((a, b) => a - b).filter((item) => item > 0);
  if (arr.length === 0) {
    return 1;
  }
  for (let i = 0; i < arr[arr.length - 1]; i++) {
    if (arr[0] > 1) {
      return 1;
    } else if (arr[i] !== arr[i + 1] && arr[i] + 1 < arr[i + 1]) {
      return arr[i] + 1;
    } else if (i === arr[arr.length - 1] - 1) {
      return arr[i] + 1;
    }
  }
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
console.log(solution([-1000, 1453, 2]));

function solution(n) {
  for (let i = 1; i < 1000000; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

console.log(solution(3));
console.log(solution(12));

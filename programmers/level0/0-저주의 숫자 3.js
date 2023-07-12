function solution(n) {
  let answer = 0;
  for (let i = 1; i < n + 1; i++) {
    answer++;
    while (answer.toString().includes("3") || answer % 3 === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(15));
console.log(solution(40));

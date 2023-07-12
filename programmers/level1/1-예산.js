function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 2, 7, 4, 5], 3));

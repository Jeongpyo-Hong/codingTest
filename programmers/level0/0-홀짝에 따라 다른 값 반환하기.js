function solution(n) {
  let answer = 0;
  if (n % 2 === 0) {
    for (let i = 1; i < n + 1; i++) {
      if (i % 2 === 0) answer += i ** 2;
    }
  } else {
    for (let i = 1; i < n + 1; i++) {
      if (i % 2 !== 0) answer += i;
    }
  }

  return answer;
}

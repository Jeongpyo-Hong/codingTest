function solution(left, right) {
  let result = 0;
  for (let i = left; i < right + 1; i++) {
    let cnt = 0;
    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }
  return result;
}

console.log(solution(13, 17));
console.log(solution(24, 27));

// 다른 풀이: 어떤 수의 제곱근이 정수면 약수의 개수가 홀수라는 점을 활용
function solution(left, right) {
  let result = 0;
  for (let i = left; i < right + 1; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      result -= i;
    } else {
      result += i;
    }
  }
  return result;
}

console.log(solution(13, 17));
console.log(solution(24, 27));

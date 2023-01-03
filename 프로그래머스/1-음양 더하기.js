function solution(absolutes, signs) {
  let result = 0;
  for (i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  }
  return result;
}

console.log(solution([4, 7, 12], [true, false, true]));

// 다른 풀이 1: reduce 사용 (but, 멋진 코드가 좋은 코드는 아님)
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

// 다른 풀이 2
// forEach 사용
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => {
    if (signs[i]) {
      answer += v;
    } else {
      answer -= v;
    }
  });
  return answer;
}

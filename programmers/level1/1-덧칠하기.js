function solution(n, m, section) {
  // 벽길이: n
  // 롤러길이: m
  // 다시 칠해야 하는 구역: section

  let paintingCnt = 0;
  let lastPainted = 0;

  section.forEach((el) => {
    if (el > lastPainted) {
      paintingCnt++;
      lastPainted = el + m - 1;
    }
  });

  return paintingCnt;
}

console.log(solution(30, 6, [3, 7, 15, 24]));

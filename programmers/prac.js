function solution(ineq, eq, n, m) {
  let calcWay;
  if (eq === "!") {
    ineq === ">" ? (calcWay = n > m) : (calcWay = n < m);
  } else {
    ineq === ">" ? (calcWay = n >= m) : (calcWay = n <= m);
  }

  return calcWay ? 1 : 0;
}

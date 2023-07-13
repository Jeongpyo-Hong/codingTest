// photo 배열을 순회하면서 그리움 점수를 새로운 배열에 담아야 함(2중반복문)
// name 배열에 담긴 이름만 그리움 점수가 있음(if문)
function solution(name, yearning, photo) {
  const answer = [];
  let sum = 0;

  photo.forEach((item) => {
    for (let i = 0; i < name.length; i++) {
      if (item.includes(name[i])) {
        sum += yearning[i];
      }
    }
    answer.push(sum);
    sum = 0;
  });

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);

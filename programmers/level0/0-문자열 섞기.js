function solution(str1, str2) {
  const arr1 = [...str1];
  const arr2 = [...str2];
  let answer = "";

  // arr1에서 한 번 꺼내고 arr2에서 한 번 꺼내고 반복
  arr1.map((text, idx) => (answer = answer + text + arr2[idx]));

  return answer;
}

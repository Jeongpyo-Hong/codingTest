function solution(n, arr1, arr2) {
  // const a = arr1[4].toString(2).padStart(n, "0");
  const arrA = [];
  const arrB = [];
  const newArr = [];
  const newArr2 = [];
  const answer = [];
  for (let i = 0; i < n; i++) {
    arrA.push([...arr1[i].toString(2).padStart(n, "0")]);
  }
  for (let j = 0; j < n; j++) {
    arrB.push([...arr2[j].toString(2).padStart(n, "0")]);
  }
  for (let k = 0; k < n; k++) {
    for (let l = 0; l < n; l++) {
      if (arrA[k][l] === "0" && arrB[k][l] === "0") {
        newArr.push(" ");
      } else if (arrA[k][l] === "1" || arrB[k][l] === "1") {
        newArr.push("#");
      }
    }
  }
  for (let m = 0; m < newArr.length; m += n) {
    newArr2.push(newArr.slice(m, m + n).join(""));
  }

  for (let n = 0; n < newArr2.length; n++) {
    answer.push(`${newArr2[n]}`);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

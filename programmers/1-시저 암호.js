function solution(s, n) {
  const arr = [...s];
  const newArr = [];
  const az = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97))
    .join("");
  const AZ = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65))
    .join("");
  const azArr = [...az, ...az];
  const AZArr = [...AZ, ...AZ];

  for (i = 0; i < arr.length; i++) {
    const toLow = arr[i].toLowerCase();
    console.log("toLow", toLow);
    if (arr[i] === " ") {
      newArr.push(" ");
    } else if (arr[i] === toLow) {
      newArr.push(azArr[azArr.indexOf(arr[i]) + n]);
    } else {
      newArr.push(AZArr[AZArr.indexOf(arr[i]) + n]);
    }
  }
  return newArr.join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));

// 공백은 밀어도 공백
// String.fromCharCode() 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환

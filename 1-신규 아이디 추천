function solution(new_id) {
  let answer = "";

  const arr = new_id.toLowerCase();
  const arr2 = arr.match(/[a-z0-9\-_.]/g);
  console.log("arr2", arr2);
  const newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "." && arr2[i + 1] === ".") {
      null;
    } else {
      newArr.push(arr2[i]);
    }
  }
  if (newArr[0] === ".") {
    newArr.shift();
  }
  if (newArr[newArr.length - 1] === ".") {
    newArr.pop();
  }
  if (newArr.length === 0) {
    newArr.push("a");
  }
  if (newArr.length > 15) {
    newArr.splice(15, newArr.length - 1);
  }
  if (newArr[newArr.length - 1] === ".") {
    newArr.pop();
  }

  if (newArr.length < 2) {
    newArr.push(newArr[newArr.length - 1]);
  }

  if (newArr.length < 3) {
    newArr.push(newArr[newArr.length - 1]);
  }

  answer = newArr.join("");

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));

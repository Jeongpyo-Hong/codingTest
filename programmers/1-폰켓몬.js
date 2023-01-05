function solution(nums) {
  const set = new Set(nums);
  const halfLength = nums.length / 2;

  return set.size > halfLength ? halfLength : set.size;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));

// n마리중 2/n 마리를 가져가라.
// 폰켓몬 종류에 따라 번호
// 같은 종류의 폰켓몬은 동일한 번호
// 절반을 선택할 때 최대 몇 종류를 얻을 수 있는지?

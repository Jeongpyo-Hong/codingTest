function solution(wallpaper) {
  const objFirst = {};
  const objLast = {};
  const keyArr = [];
  const valueArr = [];

  for (let i = 0; i < wallpaper.length; i++) {
    wallpaper[i].includes("#")
      ? (objFirst[i] = wallpaper[i].indexOf("#"))
      : null;
    wallpaper[i].includes("#")
      ? (objLast[i + 1] = wallpaper[i].lastIndexOf("#") + 1)
      : null;
  }

  for (let key in objFirst) {
    keyArr.push(key);
    valueArr.push(objFirst[key]);
  }
  for (let key in objLast) {
    keyArr.push(key);
    valueArr.push(objLast[key]);
  }

  const newKeyArr = keyArr.map(Number).sort();
  valueArr.sort();

  return [
    newKeyArr[0],
    valueArr[0],
    newKeyArr[newKeyArr.length - 1],
    valueArr[valueArr.length - 1],
  ];
}

console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);

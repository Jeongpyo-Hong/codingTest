function solution(players, callings) {
  // 객체 형태로 현재 순위 저장
  let playersMap = {}; // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
  for (let i = 0; i < players.length; i++) {
    playersMap[players[i]] = i;
  }
  for (let i = 0; i < callings.length; i++) {
    const idx = playersMap[callings[i]]; // 3
    const temp = players[idx - 1]; // 3-1 => 'poe'

    // 해당 index와 이전 index swap
    players[idx - 1] = callings[i];
    players[idx] = temp;

    // playerMap 갱신
    playersMap[callings[i]] = idx - 1;
    playersMap[temp] = idx;
  }
  return players;
}

console.log(
  solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine"])
);

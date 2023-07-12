function solution(players, callings) {
  // 객체 형태로 현재 순위 저장(key, value에 각각 접근하기 위함)
  let playersMap = {}; // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
  for (let i = 0; i < players.length; i++) {
    playersMap[players[i]] = i;
  }
  for (let i = 0; i < callings.length; i++) {
    const idx = playersMap[callings[i]]; // 'kai'는 기존 3등이므로 => idx = 3
    const temp = players[idx - 1]; // 2등인 플레이어 이름을 찾아야 하므로 => temp = 'poe'

    // 한 단계 앞으로 순위 변경
    players[idx - 1] = callings[i];
    // 변경된 순위에 맞게 플레이어 이름도 변경
    players[idx] = temp;

    // playerMap도 위와 같이 갱신
    playersMap[callings[i]] = idx - 1;
    playersMap[temp] = idx;
  }
  return players;
}

console.log(
  solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine"])
);

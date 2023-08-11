function solution(land) {
  //첫번째 풀이

  // let maxIndex = land[0].indexOf(Math.max(...land[0]));
  // let answer = Math.max(...land[0]);

  // for (let i = 1; i < land.length; i++) {
  //   land[i].splice(maxIndex, 1);
  //   maxIndex = land[i].indexOf(Math.max(...land[i]));
  //   answer += Math.max(...land[i]);
  // }

  //참고 : https://habitual-history.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%95%85%EB%94%B0%EB%A8%B9%EA%B8%B0-javascript
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 1, 3, 1],
    [2, 3, 2, 2],
    [1, 4, 1, 1],
  ])
);

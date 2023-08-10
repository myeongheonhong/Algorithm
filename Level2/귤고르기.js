//URL : https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  var answer = 0;

  const result = tangerine.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});

  const arr = Object.values(result).sort((a, b) => b - a);
  console.log(arr);

  let sum = 0;

  for (let e of arr) {
    answer++;
    sum += e;
    if (sum >= k) break;
  }

  return answer;
}
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));

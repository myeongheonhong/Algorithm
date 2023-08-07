// URL: https://school.programmers.co.kr/learn/courses/30/lessons/140107

function solution(k, d) {
  let answer = 0;

  function getY(num) {
    return Math.sqrt(d * d - num * num);
  }

  for (let i = 0; i <= d; i += k) {
    answer += Math.floor(getY(i) / k) + 1;
    console.log(answer);
  }
  return answer;
}

console.log(solution(1, 50));

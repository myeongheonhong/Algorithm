function solution(n) {
  let answer = 0;

  const nCount = n.toString(2).split('1').length;

  for (answer = n + 1; answer <= 1000000; answer++) {
    if (nCount === answer.toString(2).split('1').length) break;
  }
  return answer;
}

console.log(solution(78));

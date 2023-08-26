// URL: https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  var answer = 0;
  let arr = new Set([...elements]);
  arr.add(elements.reduce((a, b) => a + b, 0));

  for (let i = 2; i < elements.length; i++) {
    let [start, end] = [0, 0];
    let count = 0;
    let sum = 0;
    let index = 0;

    while (end < elements.length || start < elements.length) {
      if (end === elements.length) {
        if (count < i) {
          sum += elements[index++];
          count++;
        } else {
          arr.add(sum);
          sum -= elements[start++];
          count--;
        }
      } else {
        if (count < i) {
          sum += elements[end++];
          count++;
        } else {
          arr.add(sum);
          sum -= elements[start++];
          count--;
        }
      }
    }
  }

  return arr.size;
}

console.log(solution([7, 9, 1, 1, 4]));

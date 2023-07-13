//url : https://school.programmers.co.kr/learn/courses/30/lessons/181188

function mySolution(targets) {
  var answer = 0;

  let arr = [];
  arr.push(targets[0]);
  answer++;

  function filterRange(arr, start, end) {
    return arr.filter((item) => start <= item && item <= end);
  }

  for (let i = 1; i < targets.length; i++) {
    let start = targets[i][0];
    let end = targets[i][1];

    let test;
    let test2;
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      test = filterRange(arr[j], start, end);
      test2 = filterRange(targets[i], arr[j][0], arr[j][1]);
      if (test.length !== 0 || test2.length !== 0) count++;
    }

    if (count === 0) answer++;
    arr.push(targets[i]);
  }

  return answer;
}

function solution(targets) {
  let answer = 0;

  targets = targets.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let cutLine = -1;

  for (let i = 0; i < targets.length; i++) {
    let start = targets[i][0];
    let end = targets[i][1];

    if (start >= cutLine) {
      answer++;
      cutLine = end;
    }
  }

  return answer;
}

const target = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];

console.log(solution(target));

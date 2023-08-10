// URL : https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

console.log(solution([9, 1, 5, 3, 6, 2]));

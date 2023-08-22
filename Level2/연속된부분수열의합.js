// URL : https://school.programmers.co.kr/learn/courses/30/lessons/178870

// 실패한 풀이 : Queue로 접근
// 실패한 원인 : 시간초과

// function solution(sequence, k) {
//   var answer = [];

//   let queue = [];
//   let sum = 0;
//   let headIndex = 0;
//   let headValue = 0;

//   for (let i = 0; i < sequence.length; i++) {
//     const num = sequence[i];

//     queue.push(i);
//     sum += num;

//     if (queue.length)
//       while (sum >= k) {
//         headIndex = queue.shift();
//         headValue = sequence[headIndex];
//         if (sum === k) answer.push([headIndex, i]);
//         sum -= headValue;
//       }
//   }

//   answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
//   console.log(answer);

//   return answer[0];
// }

//투포인터
// 시작점과 끝점의 범위를 포현할때

function solution(sequence, k) {
  var answer = [];

  let [start, end] = [0, 0];
  let sum = 0;

  while (end < sequence.length || start < sequence.length) {
    if (sum < k) {
      sum += sequence[end++];
    } else if (sum === k) {
      answer.push([start, end - 1]);
      sum -= sequence[start++];
    } else {
      sum -= sequence[start++];
    }
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  return answer[0];
}

solution([1, 1, 1, 2, 3, 4, 5], 5);

// TIL
// 배열의 첫번째 원소를 제거 :shift 연산

// 정확하게 모르는것
// 배열을 이용해서 큐를 활용하는 메서드를 몰랐음

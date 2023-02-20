'use strict';

function solution(citations) {
    let answer = 0;
    const sortedCitations = citations.sort((a, b) => b - a);

    while (answer + 1 <= sortedCitations[answer]) {
        answer++;
    }
    return answer;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));

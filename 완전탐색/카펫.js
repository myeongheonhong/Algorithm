'use strict';

//url : https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    let answer = [];
    let measure = [];
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) measure.push(i);
    }

    for (let i = 0; i < measure.length / 2; i++) {
        if (
            brown ===
            (measure[i] + 2) * (measure[measure.length - 1 - i] + 2) -
                measure[i] * measure[measure.length - 1 - i]
        ) {
            answer.push(measure[measure.length - 1 - i] + 2);
            answer.push(measure[i] + 2);
        }
    }

    return answer;
}

console.log(solution(24, 24));

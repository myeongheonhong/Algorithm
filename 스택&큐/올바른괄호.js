'use strict';

function solution(s) {
    let answer = true;

    let bracket = [...s];
    let stack = 0;

    if (bracket.length === 1 || bracket[0] === ')') return false;

    bracket.forEach((e) => {
        if (e === '(') stack++;
        else {
            if (stack === 0) return false;
            stack--;
        }
    });

    return stack !== 0 ? false : answer;
}

solution('()()');

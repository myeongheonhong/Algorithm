'use strict';

//url : https://school.programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
    let answer = -1;
    const makeNumberList = [];

    if (N === number) return 1;
    else {
        makeNumberList[1] = new Set().add(N);
        for (let i = 2; i < 9; i++) {
            calculate(i);

            if (makeNumberList[i].has(number)) {
                answer = i;
                break;
            }
        }
    }

    function calculate(count) {
        makeNumberList[count] = new Set();
        let strN = N.toString();
        for (let i = 1; i < count; i++) {
            strN += N.toString();
            const [left, right] = [i, count - i];
            for (let leftValue of makeNumberList[left]) {
                for (let rightValue of makeNumberList[right]) {
                    makeNumberList[count].add(leftValue + rightValue);
                    makeNumberList[count].add(leftValue - rightValue);
                    makeNumberList[count].add(leftValue * rightValue);
                    if (rightValue !== 0) {
                        makeNumberList[count].add(
                            Math.floor(leftValue / rightValue)
                        );
                    }
                }
            }
        }
        makeNumberList[count].add(parseInt(strN));
    }

    return answer;
}

solution(5, 12);

'use strict';

//url : https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
    let answer = [];
    let count = 0;
    let visited = Array(dungeons.length).fill(false);

    dfs(count, k);

    function dfs(count, fatigue) {
        answer.push(count);
        for (let i = 0; i < dungeons.length; i++) {
            let minFatigue = dungeons[i][0];
            if (minFatigue <= fatigue && !visited[i]) {
                visited[i] = true;
                dfs(count + 1, fatigue - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }

    return Math.max(...answer);
}

solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
]);

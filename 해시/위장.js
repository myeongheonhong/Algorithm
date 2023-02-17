'use strict';
// url : https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
    let answer = 1;
    let map = new Map();

    clothes.forEach((e) => {
        if (map.has(e[1])) {
            let count = map.get(e[1]);
            map.set(e[1], count + 1);
        } else {
            map.set(e[1], 1);
        }
    });
    map.forEach((e) => {
        console.log(e);
        answer *= e + 1;
    });
    return answer - 1;
}

function mySolution(clothes) {
    let answer = 0;

    let sortNameCount = new Map();

    clothes.forEach((element) => {
        if (sortNameCount.has(element[1])) {
            let count = sortNameCount.get(element[1]);
            count++;
            sortNameCount.set(element[1], count);
        } else {
            sortNameCount.set(element[1], 1);
        }
    });

    let sortedMap = new Map(
        [...sortNameCount].sort((a, b) => a[1] - b[1]).reverse()
    );

    answer += clothes.length;

    for (let i = 1; i < sortNameCount.size; i++) {
        let count = 1;
        let spare = 0;
        let breakCheck = 0;
        sortedMap.forEach((e) => {
            if (i > breakCheck) {
                count = count * e;
            } else {
                spare += e;
            }
            breakCheck++;
        });

        answer += count * spare;
    }
    return answer;
}

// Input Test
const input1 = [
    ['yellow_hat', 'headgear'],
    ['black_hat', 'headgear'],
    ['green_turban', 'headgear'],
    ['red_mask', 'mask'],
    ['brown_mask', 'mask'],
    ['blue_sunglasses', 'eyewear'],
    ['white_jin', 'pants'],
    ['black_jin', 'pants'],
    ['blue_cotton', 'pants'],
];

const input = [
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'eyewear'],
];

console.log(solution(input));

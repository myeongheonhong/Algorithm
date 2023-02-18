'use strict';
//url : https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    let bridge_weight = 0;

    while (bridge.length > 0) {
        answer++;

        bridge_weight -= bridge.shift();

        if (truck_weights.length > 0) {
            if (bridge_weight + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge_weight += truck;
                bridge.push(truck);
            } else {
                bridge.push(0);
            }
        }
    }
    return answer;
}

const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length, weight, truck_weights));

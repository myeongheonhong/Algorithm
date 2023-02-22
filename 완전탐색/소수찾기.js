'use strict';

//https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
    const array = numbers.split('');
    let answer = new Set();

    function isPrimeNum(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function getPermutaion(array, fixed) {
        if (array.length) {
            for (let i = 0; i < array.length; i++) {
                let newFixed = fixed + array[i];
                let copyArray = [...array];
                copyArray.splice(i, 1);
                console.log(newFixed);
                console.log(copyArray);

                if (isPrimeNum(Number(newFixed))) answer.add(Number(newFixed));
                getPermutaion(copyArray, newFixed);
            }
        }
    }

    getPermutaion(array, '');

    return answer.size;
}

console.log(solution('123'));

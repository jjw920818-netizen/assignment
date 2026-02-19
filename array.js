// 배열(array)
let numbers = [10,"two",30];

// console.log(numbers[0]);
// console.log(numbers[1]);

// for (let i =0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for(const num of numbers) {
//     console.log(num);
// }

for(const [i , num] of numbers.entries()) {
    console.log(i + "빈 index 값 :" + num);
}
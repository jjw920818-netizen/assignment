//점수 배열을 입력 받아서, 평균을 반환하는 함수
function getAverage(scores) {

    let sum = 0;
    for(const score of scores){
        sum += score;
    }
    return sum / scores.length;
}

console.log(getAverage([80,90,75,83]));

/*
 * 1층부터 10층까지 있는 빌딩이 있습니다.
 * 엘리베이터에 탑승객들이 무작위로 본인들이 내릴 층수를 누르고 나면
 * 엘리베이터가 무작위로 누른 순서가 아닌 윗층으로 올라가면서 차례대로 멈출 수 있게 코드를 작성해 주세요.
 * 단, 2번 입력시 해당층은 취소이며, 3번입력 시 다시 재입력입니다.

 *
 * 예시1. 
 * (String) INPUT : 1,8,10,5
 * (String) OUTPUT : 1,5,8,10
 *
 * 예시2. 
 * (String) INPUT : 7,2,7,3,9
 * (String) OUTPUT : 2,3,9
 * 
 * 주어진 함수에 결과값이 RETURN 되도록 코드를 작성해 주세요.
 * {{ Code }} 부분에 코드를 작성해 주시면 됩니다.
 */

function question (...floor) {
    // 1~10 층의 유효한 수만 배열에 담기
    let arr = [];
    for (let item of floor) {
        if(0 < item && item < 11) {
            arr.push(item);
        };
    };
    // 각 층수별로 몇번 눌렀는지 계산
    let obj = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0)+1; 
        return acc;
    }, {});
    // 계산한 값을 다시 배열로 담아서 홀수인 층수만 반환
    let arr1 = Object.entries(obj);
    let result = [];
    for(item of arr1) {
        if(item[1]%2 !== 0) {
            let num = Number(item[0]);
            result.push(num);
        };
    };
    return result;
};
console.log('ex => ', question(7,2,7,3,9,18,0,-1,7,4,2));


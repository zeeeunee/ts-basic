//특정 파라미터값을 optional처리시 type의 오류는 넘어갈 수 있지만
//optional처리한 값을 코드 내부적으로 예외처리하지 않으면 에러가 발생
const test = (n1, n2, n3) => {
    //const result = n1 + n2 + n3;
    const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
    return result;
};
//위의 함수의 예외처리를 아래와 같이 간결하게 처리
const test2 = (n1, n2, n3) => {
    const result = n1 + n2 + (n3 || 0);
    return result;
};
console.log(test2(1, 2));

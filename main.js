//특정 파라미터값을 optional처리시 type의 오류는 넘어갈 수 있지만
//optional처리한 값을 코드 내부적으로 예외처리하지 않으면 에러가 발생
const test = (n1, n2, n3) => {
    //const result = n1 + n2 + n3;
    const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
    return result;
};
console.log(test(1, 2));
//파라미터에서 타입을 optional이나 유니온타입을 지정하더라도 없을 수도 있는 값을 코드 안쪽에서 예외처리하지 않으면 컴파일 에러발생

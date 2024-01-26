// ||연산자로 예외처리했을때 문제가 발생할 수 있는 상황
const introduce = (name, age) => {
    console.log(`This is ${name}`);
    console.log(`${name} is ${age !== null && age !== void 0 ? age : 'default'} years old`);
};
//기존 ||연산자보다 null병합 연산자를 써야되는 이유
// ||연산자는 빈문자나 0같이 실제적인 값조차도 false로 인식해서 예외처리하므로 예상치못한 문제발생 가능
// ??연산자는 무조건 undefined, null같이 실제적으로 에러가 발생할만한 상황에서만 예외처리
introduce('my Baby', 0);

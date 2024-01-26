//Generic
//공통된 규칙인데 호출할때 들어갈 자료형을 매번 산정하기 어려울때
//일일이 타입을 따로 지정하는것이 비효율적이므로 타입지정을 호출할떄 지정하는 틀
//아래같은 경우는 배열의 들어가는 자료값이 일정하지 않으므로 똑같은 구조임에도불구하고
//타입에 따른 함수를 여러개 복사해야 되는 번거로움
const getLength = (arr) => {
    return arr.length;
};
const getLength2 = (arr) => {
    return arr.length;
};
//any타입으로 지정함으로서 위의 문제점 해결
const getAnyLength = (arr) => {
    return arr.length;
};
//any타입을 지정하면 정상적이지 못한 값이 들어와도 컴파일시 에러잡지 못함
const numbers = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c'];
const weired = [false, 3, '3'];
getAnyLength(numbers);
getAnyLength(letters);
getAnyLength(weired);
//generic으로 호출시 상세타입을 파라미터로 전달
const getGenericLength = (arr) => {
    return arr.length;
};
//함수호출시 미리 지정한 경로 타입을 전달하는 구조
getGenericLength(['a', 'b']);
getGenericLength([1, 2]);
getGenericLength([1, '2']);

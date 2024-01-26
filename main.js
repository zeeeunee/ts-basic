//객체로 구성된 배열의 타입
//각각의 Interface로 구성된 타입을 지정 (실무에서 가장 많이 쓰이는 패턴 DB나 API에서 데이터 가져올떄)
const classInfo = [
    { name: 'David', age: 20, isFemale: false, address: 'Seoul' },
    { name: 'Michael', age: 30, isFemale: false },
    { name: 'Jula', age: 32, isFemale: true },
];
//단순 문자타입으로 구성된 배열
const names = ['red', 'green', 'blue'];
const getArrayInfo = (arr) => {
    console.log(arr);
};
//제네릭으로 인터페이스도 타입으로 전달해서 호출 가능 (해당 패턴을 제일 많이 사용)
getArrayInfo(classInfo);
getArrayInfo(names);

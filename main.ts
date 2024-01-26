//객체로 구성된 배열의 타입

//개별객체의 타입인 interface지정
interface Student {
	name: string;
	age: number;
	isFemale: boolean;
	address?: string;
}

//각각의 Interface로 구성된 타입을 지정 (실무에서 가장 많이 쓰이는 패턴 DB나 API에서 데이터 가져올떄)
const classInfo: Student[] = [
	{ name: 'David', age: 20, isFemale: false, address: 'Seoul' },
	{ name: 'Michael', age: 30, isFemale: false },
	{ name: 'Jula', age: 32, isFemale: true },
];

//단순 문자타입으로 구성된 배열
const names: string[] = ['red', 'green', 'blue'];
const names2: number[] = [1, 2, 3];

const getArrayInfo = <t>(arr: t[]) => {
	console.log(arr);
};

//제네릭으로 인터페이스도 타입으로 전달해서 호출 가능 (해당 패턴을 제일 많이 사용)
getArrayInfo<Student>(classInfo);
getArrayInfo<string>(names);
//아래처럼 우리 함수에서 의도한 값이랑 다른값이 들어올떄 generic을 해서 오류파악 가능
getArrayInfo<string>(names2);

//type 주로 쓰는 경우
//1. 기존 객체타입의 property의 추가가 아닌, 서로 다른 객체를 합쳐서 새로운 타입을 만들때
//2. 객체가 아닌 일반 자료형인데

interface StudentA {
	name: string;
	age: number;
}

interface StudentB {
	name: string;
	isFemale: boolean;
}

//type이용해서 두개의 인터페이스에서 Intersection으로 &&로 합쳐서 새로타입지정
type StudentTotal = StudentA & StudentB;

let student1: StudentTotal = {
	name: 'Emily',
	age: 30,
	isFemale: true,
};

//객체는 아니지만 특정 커스터마이징된 타입을 재활용해야 될떄 type으로 지정
type commonType = string | null;

const test = (info: commonType) => {
	console.log(info);
};

//type: 특정 커스터마이징된 자료형을 새로 선언할때
//type vs interface차이점
//interface는 객체에만 적용가능
//type은 자료형 상관없이 모두 적용가능
//커스텀자료형을 만들어야 될 때 객체는 가급적 interface, 그 외 자료형은 type

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

/*
interface Student {
  name: string;
  age: number;
  readonly isFemale: boolean;
  score: Grade;
}
*/
//Interface 대신 type으로도 객체타입 선언가능
type Student = {
	name: string;
	age: number;
	readonly isFemale: boolean;
	score: Grade;
};

let student1: Student = {
	name: 'Andy',
	age: 40,
	isFemale: false,
	score: 'F',
};

student1.score = 'F';

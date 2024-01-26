//interface는 객체의 property 확장에 따른 구조변경이 편함
type Student = {
	name: string;
	age: number;
};

type Student = {
	name: string;
	age: number;
	isFemale: boolean;
};

let student1: Student = {
	name: 'David',
	age: 30,
	isFemale: false,
};

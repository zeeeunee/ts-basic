//기본 타입
let txt: string = 'hello';
let num: number = 0;
let isFemale: boolean = false;

//참조형타입
let likes: string[] = ['game', 'music', 'movie'];
let unlikes: Array<string> = ['study', 'sports', 'homework'];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
//tuple: 배열의 들어갈 타입을 개별적으로 지정
let combined: [number, string, boolean] = [3, 'homework', false];
//유니온타입으로 들어갈수 있는 자료형을 복수개 지정
let random: Array<number | string> = [4, '5', '3', 7];

//Interface : 객체같이 복잡한 구조의 타입을 지정을 할때
//특정 경우에 대한 커스텀타입을 제작해서 재활용
interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean; //특정 property를 수정불가하게 읽기 전용으로 지정
	address?: string; //해당 property를 선택사항으로 지정
}
let student1: Student = {
	name: 'David',
	age: 20,
	isFemale: false,
	address: 'seoul',
};

let student2: Student = {
	name: 'Emily',
	age: 30,
	isFemale: true,
};

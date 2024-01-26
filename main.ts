//제네릭에서 interface 확장하기
//이미 특정 interface가 파라미터로 적용되어 있는 상태에서
//특정 상황에서만 다른 interface의 기능을 빌려와서 임시로 타입을 확장해서 호출하고 싶을때 사용
//굳이 interface를 고치긴 번거롭고 확장해야 되는 기능이 복잡할때

interface Student {
	name: string;
	age: number;
}

interface Abroad {
	nation: string;
	period: number;
}

const fetchData = <t>(info: t[]) => {
	console.log(info);
};

//특정 interface형식으로 배열값이 전달될때 (DB, API data)
const info1 = [
	{ name: 'David', age: 30, period: 40 },
	{ name: 'David', age: 30, period: 40 },
	{ name: 'David', age: 30, period: 40 },
];

//generic으로 인터페이스 활용하는 사례
//범용적으로 배열로 묶여있는 객체데이터를 활용하는 (Component)
//특정 데이터 카테고리 외의 값이 전달시 에러나게 할때 Generict 특정 데이터의 인터페이스 전달
fetchData<Student>(info1);

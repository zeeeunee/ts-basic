//파라미터로 전달되는 인수의 갯수를 특정할 수 없을때 rest파라미터 지정하고 배열타입 설정
interface Calc {
	(...n: number[]): number | void;
}

const plus: Calc = (n1, n2) => {
	console.log(n1);
	console.log(n2);
};

plus(2, 3, 4, 5);
plus(1, 2);

//다른 로직의 함수라고 하더라도 전달되는 인수와 리턴값이 매번 같은 패턴이면 일일이 함수마다 타입지정이 번거로움
//함수로 인터페이스로 특정함수의 타입을 지정해서 재활용가능
interface Calc {
	(n1: number, n2: number): number | void;
}

const plus: Calc = (n1, n2) => {
	return n1 + n2;
};

const minus: Calc = (n1, n2) => {
	return n1 - n2;
};

const multiply: Calc = (n1, n2) => {
	console.log(n1 * n2);
};

const divider: Calc = (n1, n2) => {
	return n1 / n2;
};

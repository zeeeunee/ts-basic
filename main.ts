//리턴값이 있는 함수면 파라미터뒤에 리턴값의 타입지정가능
//리턴값이 없으면 리턴값의 타입을 void지정
//일반적으로 인수가 제대로 전달되면 리턴값이 잘못나올리가 없고
//리턴으로 에러가 잡혀봤자 이미 에러가 난 상황이기 때문에 return에 타입지정이 무의미
const plus = (n1: number, n2: number): number => {
	//console.log(n1 + n2);
	return n1 + n2;
};

const minus = (n1: number, n2: number) => {
	return n1 - n2;
};

const multiply = (n1: number, n2: number) => {
	return n1 * n2;
};

const divider = (n1: number, n2: number) => {
	return n1 / n2;
};

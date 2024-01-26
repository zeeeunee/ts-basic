//해당 로직에서 중요하게 다룰 Post데이터 객체의 타입을 미리 interface로 선언
interface Task {
	id: number;
	title: string | Node; //해당 값은 추후 JS에서 prepend메서드의 인수로 전달될 값인데 해당메서드가 string, node만 전달되도로 강제
	createAt: Date;
	complete: boolean;
}
//HTML요소를 변수에 담을시 Typescript에 내장되어있는 노드요소 타입을 가져와서 제네릭으로 설정가능
const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector<HTMLFormElement>('#form');
const input = document.querySelector<HTMLInputElement>('#title');
//JSON.parse무조건 파라미터로 인수가 문자값만 넘어오도록 강제되어 있음
//빈배열조차로 문자화해서 대체값으로 지정
let tasks: Task[] = JSON.parse(localStorage.getItem('TASKS') || '[]');
tasks.forEach((task) => addListItem(task));
//DOM이 담겨있는 변수의 경우는 값자체가 Web API를 통해서 외부에서 가져오는 값이기 때문에
//JS자체적으로 제어권이 없으므로 항상 값이 null일수도 있다고 인지하기 때문에 optional chaining처리 필수
form?.addEventListener('submit', (e) => {
	e.preventDefault();
	if (input?.value.trim() === '') return alert('할일을 입력하세요.');

	const newTask = {
		id: performance.now(),
		title: input?.value || '',
		createAt: new Date(),
		complete: false,
	};
	tasks.push(newTask);
	addListItem(newTask);
	saveTasks();
	//input요소가 DOM이므로 option chaing을 하면되는데 아래경우는 불가
	//대입연산자 좌항에는 optional chining처리 불가
	//해결법: DOM있을때에만 &&연산자로 해당 구문이 실행되게 만들고 &&연산자와 =연산자를 같은식으로 쓸수 없으므로 대입연산자식을 괄호로묶어서 우선순위 처리
	input && (input.value = '');
});

function addListItem(task: Task) {
	const item = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	const button = document.createElement('button');
	button.innerText = '삭제';
	if (task.complete) {
		item.style.textDecoration = 'line-through';
		checkbox.checked = true;
		item.append(button);
	} else {
		item.style.textDecoration = 'none';
		checkbox.checked = false;
	}

	checkbox.addEventListener('change', () => {
		task.complete = checkbox.checked;
		if (task.complete) {
			item.style.textDecoration = 'line-through';
			const button = document.createElement('button');
			button.innerText = '삭제';
			item.append(button);
			button.addEventListener('click', (e) => {
				const del_id = task.id;
				tasks = tasks.filter((el) => el.id !== del_id);
				saveTasks();
				//타입스크립트에서는 event객체안쪽의 property를 읽지 못하는 버그
				//해결방법: 해당 이벤트 객체를 변수로 옮겨담고 직접 타입 지정
				const eventTarget = e.currentTarget as HTMLButtonElement;
				eventTarget.parentElement?.remove();
			});
		} else {
			item.style.textDecoration = 'none';
			item.querySelector('button')?.remove();
		}
		saveTasks();
	});

	const newText: string | Node = task.title;

	item.prepend(checkbox, newText);
	list?.append(item);
}

function saveTasks() {
	localStorage.setItem('TASKS', JSON.stringify(tasks));
}

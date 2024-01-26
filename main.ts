interface Post {
	tit: string;
	con: string;
}
interface User {
	name: string;
	age: number;
}

/*
const addPost = (data: Post) => {
  console.log(data);
};
*/

const addPost = <t>(data: t) => {
	console.log(data);
};

addPost<Post>({ tit: 'a', con: 'b' });

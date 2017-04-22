class Person {

	constructor(tasks) {
		this.tasks = tasks;
	}

	prepare() {
		this.tasks.forEach(task => console.log(task))
	}

}


const VERSION = 1.11;

$('body').prepend('<h1>'+VERSION+'</h1>')

// new Person([123,55,77]).prepare();



let names = ['Bogdan', 'Diman', 'Ioan'];


names = names.map(k => k + ' is cool');

console.log(names);



function discount(cost, discount = .10) {

	return cost - (cost * discount);
}


function calcSum(...numbers) {
	return numbers.reduce((prev,next) => prev + next);
}

console.log(calcSum(1,3,5,7));


let msg = 'Problem with cookies';


let template = `
	<div class='alert'>
		<p> ${msg} </p>
	</div>
`;


$('body').prepend(template);

console.log(template);




function dest({a , b}) {
	console.log(a);
}


dest({a:3,b:6});



class Person2 {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static get className() {
		return 'Person2';
	}

	name() {
		return this.name;
	}

	get sum() {
		return this.x + this.y;
	}

	// set sum(name) {
	// 	this.name=name;
	// }

	static name() {
		return '234444';
	}
}


let obj2=new Person2(10, 15);

// obj2.name = 'Some name';

console.log(obj2.sum);

console.log(Person2.className);

class TaskCollection {

	constructor(tasks) {
		this.tasks = tasks;
	}

	dump() {
		console.log(this.tasks);
	}

	get firstTask() {
		return this.tasks[0];
	}
}


let hhh = new TaskCollection([
		'Todo 1',
		'Todo 2',
		'Todo 3 you'
	]);

console.log(hhh.firstTask);

// let phrase = ['hello Bogdan', 'i hope you are enjoying the blog posts', 'see you later!'];
// let pi = 0;

// alert(phrase.next());


function *iterator(name) {
	yield 'hello '+name;
	yield 'i h 1you later11111!';
}

let iter = iterator('Bogdan');


$('.inside').on('click',function(){
	let $this = $(this);
	$('body').append(`
		<p>${iter.next().value}</p>
	`)
});

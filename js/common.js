'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _marked = [iterator].map(regeneratorRuntime.mark);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
	function Person(tasks) {
		_classCallCheck(this, Person);

		this.tasks = tasks;
	}

	_createClass(Person, [{
		key: 'prepare',
		value: function prepare() {
			this.tasks.forEach(function (task) {
				return console.log(task);
			});
		}
	}]);

	return Person;
}();

var VERSION = 1.11;

$('body').prepend('<h1>' + VERSION + '</h1>');

// new Person([123,55,77]).prepare();


var names = ['Bogdan', 'Diman', 'Ioan'];

names = names.map(function (k) {
	return k + ' is cool';
});

console.log(names);

function discount(cost) {
	var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;


	return cost - cost * discount;
}

function calcSum() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	return numbers.reduce(function (prev, next) {
		return prev + next;
	});
}

console.log(calcSum(1, 3, 5, 7));

var msg = 'Problem with cookies';

var template = '\n\t<div class=\'alert\'>\n\t\t<p> ' + msg + ' </p>\n\t</div>\n';

$('body').prepend(template);

console.log(template);

function dest(_ref) {
	var a = _ref.a,
	    b = _ref.b;

	console.log(a);
}

dest({ a: 3, b: 6 });

var Person2 = function () {
	function Person2(x, y) {
		_classCallCheck(this, Person2);

		this.x = x;
		this.y = y;
	}

	_createClass(Person2, [{
		key: 'name',
		value: function name() {
			return this.name;
		}
	}, {
		key: 'sum',
		get: function get() {
			return this.x + this.y;
		}

		// set sum(name) {
		// 	this.name=name;
		// }

	}], [{
		key: 'name',
		value: function name() {
			return '234444';
		}
	}, {
		key: 'className',
		get: function get() {
			return 'Person2';
		}
	}]);

	return Person2;
}();

var obj2 = new Person2(10, 15);

// obj2.name = 'Some name';

console.log(obj2.sum);

console.log(Person2.className);

var TaskCollection = function () {
	function TaskCollection(tasks) {
		_classCallCheck(this, TaskCollection);

		this.tasks = tasks;
	}

	_createClass(TaskCollection, [{
		key: 'dump',
		value: function dump() {
			console.log(this.tasks);
		}
	}, {
		key: 'firstTask',
		get: function get() {
			return this.tasks[0];
		}
	}]);

	return TaskCollection;
}();

var hhh = new TaskCollection(['Todo 1', 'Todo 2', 'Todo 3 you']);

console.log(hhh.firstTask);

// let phrase = ['hello Bogdan', 'i hope you are enjoying the blog posts', 'see you later!'];
// let pi = 0;

// alert(phrase.next());


function iterator(name) {
	return regeneratorRuntime.wrap(function iterator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 'hello ' + name;

				case 2:
					_context.next = 4;
					return 'i h 1you later11111!';

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var iter = iterator('Bogdan');

$('.inside').on('click', function () {
	var $this = $(this);
	$('body').append('\n\t\t<p>' + iter.next().value + '</p>\n\t');
});
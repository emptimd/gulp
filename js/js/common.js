var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [iterator].map(_regeneratorRuntime.mark);

var Person = function () {
	function Person(tasks) {
		(0, _classCallCheck3.default)(this, Person);

		this.tasks = tasks;
	}

	(0, _createClass3.default)(Person, [{
		key: 'prepare',
		value: function prepare() {
			this.tasks.forEach(function (task) {
				return console.log(task);
			});
		}
	}]);
	return Person;
}();

// new Person([123,55,77]).prepare();

var names = ['Bogdan', 'Diman', 'Ioan'];

names = names.map(function (k) {
	return k + ' is cool';
});

console.log(names);

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
	var a = _ref.a;
	var b = _ref.b;

	console.log(a);
}

dest({ a: 3, b: 6 });

var Person2 = function () {
	function Person2(x, y) {
		(0, _classCallCheck3.default)(this, Person2);

		this.x = x;
		this.y = y;
	}

	(0, _createClass3.default)(Person2, [{
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
		(0, _classCallCheck3.default)(this, TaskCollection);

		this.tasks = tasks;
	}

	(0, _createClass3.default)(TaskCollection, [{
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
	return _regenerator2.default.wrap(function iterator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return 'hello ' + name;

				case 2:
					_context.next = 4;
					return 'i h 1you later111!';

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

// let iter = iterator('Bogdan');

// $('.inside').on('click',function(){
// 	let $this = $(this);
// 	$('body').append(`
// 		<p>${iter.next()}</p>
// 	`)
// });
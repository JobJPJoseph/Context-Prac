// Your code here
class CallCenter {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hello this is ${this.name}`);
		return true;
	}

	callMeLater(delay) {
		setTimeout(() => {
			this.sayHello()
			// The arrow-function is bound less
			// the contect depends on the code inside
			// so this === CallCenter
		}, delay);
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}

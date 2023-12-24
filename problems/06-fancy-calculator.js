// Your code here
const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
	constructor() {
		super();
	}

	setTotal(newTotal) {
		this.total = newTotal;
		return this.total;
	}

	modulo(num) {

		while(true) {
			if (this.total < num) break;
			this.total = this.divide(num);
		}

		return Math.floor(this.total);
	}

	squared() {
		return this.total * this.total;
	}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}

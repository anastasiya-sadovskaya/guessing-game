class GuessingGame {
    constructor() {
    	this.min = null;
    	this.max = null;
    	this.mid = null;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	this.mid = Math.round((max + min) / 2);
    }

    guess() {

    }

    lower() {

    }

    greater() {
    }
}

module.exports = GuessingGame;

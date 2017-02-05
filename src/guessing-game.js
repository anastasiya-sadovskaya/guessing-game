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
        this.mid = Math.round((this.max + this.min) / 2);
    	return this.mid;
    }

    lower() {
    	this.max = this.mid;
    }

    greater() {
    	this.min = this.mid;
    }
}

module.exports = GuessingGame;

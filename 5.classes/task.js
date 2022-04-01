class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(levelOfState) {
    		this._state = levelOfState;
    		if (levelOfState < 0) {
    			return this._state = 0;
    		}
    		if (levelOfState > 100) {
    			return this._state = 100;
    		}
    }
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state) {
    		super(name, releaseDate, pagesCount, state);
    		this.type = "magazine";
    	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}
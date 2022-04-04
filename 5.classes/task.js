class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(value) {
    		this._state = value;
    		if (value < 0) {
    			return this._state = 0;
    		} else if (value > 100) {
    			return this._state = 100;
    		} else {
    		    this._state = value;
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

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let findBook = this.books.find(item => value === item[type]);
        if (findBook) {
            return findBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let id = this.books.findIndex(item => item.name === bookName);
        if (id !== -1) {
            return this.books.splice(id, 1)[0];
        } else {
            return null;
        }
    }
}
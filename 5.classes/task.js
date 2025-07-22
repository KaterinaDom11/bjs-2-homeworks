class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5
	}

	set state(stateNew) {
		if (stateNew < 0) {
			this._state = 0;
		} else if (stateNew > 100) {
			this._state = 100;
		} else {
			this._state = stateNew;
		}
	}

	get state() {
		return this._state;
	}

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}


const library = new Library("Библиотека имени Пушкина");

const book1 = library.addBook(
 new NovelBook(
   "Александр Пушкин",
   "Евгений Онегин",
   1883,
   224
 )
);
book1.state = 90;
const book2 = library.addBook(
 new DetectiveBook(
   "Фёдор Достоевский",
   "Преступление и наказание",
   1866,
   430
 )
);
book2.state = 70;
const book3 = library.addBook(
    new FantasticBook(
    "Михаил Булгаков",
     "Мастер и Маргарита", 
     1967, 
     350));
book3.state = 25;
const book4 = library.addBook(new Magazine("История России", 1919, 60));
book4.state = 45;

library.addBook(book1);
library.addBook(book2);
library.addBook(book4);
library.addBook(book3);

console.log("Книги в библиотеке после добавления:", library.books);

let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
    book1919 = new Book("Неизвестный автор", "Книга 1919 года", 1919, 100);
    book1919.state = 80;
    library.addBook(book1919);
}
console.log("Книга 1919 года:", book1919);

const givenBook = library.giveBookByName("Евгений Онегин");
console.log("Выданная книга:", givenBook);

givenBook.state = 20;
console.log("Состояние книги после повреждения:", givenBook.state);


givenBook.fix();
console.log("Состояние книги после восстановления:", givenBook.state);

library.addBook(givenBook);
console.log("Книги в библиотеке после возврата:", library.books);
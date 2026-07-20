// Mini Project – Library Management
// Features

// ✅ Add Book

// ✅ Remove Book

// ✅ Show All Books

// ✅ Search Book

export class Book{

    constructor(title,author)
    {
        this.title = title;
        this.author = author;
    }

    display_book()
    {
        console.log(this.title)
        console.log(this.author)
    }
}

const b1 = new Book ("Never lie","Freida McFadden")

b1.display_book()


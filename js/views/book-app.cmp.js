import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookDetails from '../cmps/book-details.cmp.js';

export default {
	template: `
    <section class="book-app">
        <div v-if="selectedBook === null">
            <book-filter @onFilter="setFilter"></book-filter>
            <book-list :books="booksToShow" @selected="selectBook"></book-list>
        </div> 
        <book-details v-else :book="selectedBook" @back="back"></book-details>
    </section>
    `,
	components: {
		bookList,
		bookFilter,
		bookDetails
	},
	data() {
		return {
			books: null,
			filterBy: null,
			selectedBook: null
		};
	},
	created() {
		bookService.query().then((books) => (this.books = books));
	},
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy;
		},
		selectBook(book) {
			this.selectedBook = book;
		},
		back() {
			this.selectedBook = null;
		}
	},
	computed: {
		booksToShow() {
			if (!this.filterBy) return this.books;
			return this.books.filter((book) => {
				if (!book.title.includes(this.filterBy.byName)) {
					return false;
				}
				if (this.filterBy.fromPrice > book.listPrice.amount) {
					return false;
				}
				if (book.listPrice.amount <= this.filterBy.toPrice) {
					return false;
				}
				return true;
			});
		}
	}
};

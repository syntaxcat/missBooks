import { bookService } from '../services/book-service.js';

export default {
	template: `
			<section class="book-add">
                <form @submit.prevent="onSubmit">
                    <input v-model="searchTerm" type="text" placeholder="Search for a book">
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    <li v-for="book in books">
                        {{book.volumeInfo.title}}
                        <button @click="addBook(book)">+</button>
                    </li>
                </ul>
			</section>
			
    `,
	components: {},
	data() {
		return {
			searchTerm: '',
			books: [],
		};
	},
	created() {},

	methods: {
		onSubmit() {
			bookService.getGoogleBook(this.searchTerm).then((books) => {
				this.books = books;
			});
		},
		addBook(googleBook) {
			bookService.addGoogleBook(googleBook);
		},
	},
	computed: {},
};

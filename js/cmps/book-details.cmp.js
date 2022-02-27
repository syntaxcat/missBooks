import bookDescription from './book-description.cmp.js';

export default {
	props: [ 'book' ],
	template: `
        <section class="book-details">
            <h1>{{book.title}}</h1>
            <h2>{{book.subtitle}}</h2>
            <h2>{{book.authors}}</h2>
            <h2>{{publishedDate}}</h2>
            <book-description :description="book.description" />
            <h2>{{pageCount}}</h2>
            <h2>{{book.categories}}</h2>
            <h2>{{book.language}}</h2>
            <h2 v-if="book.listPrice.isOnSale">SALE</h2>
            <h2><span :class="colorStyle">{{book.listPrice.amount}}</span></h2>
        </section>
    `,
	components: {
		bookDescription
	},
	created() {},
	data() {
		return {};
	},
	methods: {},
	computed: {
		pageCount() {
			if (this.book.pageCount > 500) return 'Long reading';
			if (this.book.pageCount > 200) return ' Decent Reading';
			return 'Light Reading';
		},
		publishedDate() {
			if (new Date().getFullYear() - this.book.publishedDate > 10) return 'Veteran Book';
			if (new Date().getFullYear() - this.book.publishedDate < 1) return 'New!';
		},
		colorStyle() {
			return {
				red: this.book.listPrice.amount > 150,
				green: this.book.listPrice.amount < 20
			};
		}
	},
	unmounted() {}
};

const bookDetails = {
	id: 'GXj93KOkqZoC',
	title: 'Hacking',
	subtitle: 'Digital Media and Technological Determinism',
	authors: [ 'Tim Jordan', 'Puki Ben David' ],
	publishedDate: 2008,
	description:
		'Hacking provides an introduction to the community of hackers and an analysis of the meaning of hacking in twenty-first century societies.',
	pageCount: 160,
	categories: [ 'Computers', 'Hack' ],
	thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
	language: 'en',
	listPrice: {
		amount: 19,
		currencyCode: 'ILS',
		isOnSale: true
	}
};

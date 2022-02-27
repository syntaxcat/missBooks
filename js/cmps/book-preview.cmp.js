export default {
	props: [ 'book' ],
	template: `
    <section class="book-preview">
		<h2>{{book.title}}</h2>
		{{book.listPrice.amount}}{{currency}}
    </section>
    `,
	components: {},
	data() {
		return {};
	},
	methods: {},
	computed: {
		currency() {
			if (this.book.listPrice.currencyCode === 'EUR') return '€';
			if (this.book.listPrice.currencyCode === 'USD') return '$';
			if (this.book.listPrice.currencyCode === 'ILS') return '₪';
			return this.book.listPrice.currencyCode;
		}
	}
};

export default {
	props: [ 'book' ],
	template: `
    <section>
        <div>
            {{book.title}} 
            {{book.listPrice.amount}}{{currency}}
        </div>
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

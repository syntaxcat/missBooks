import bookPreview from './book-preview.cmp.js';

export default {
	props: [ 'books' ],
	template: `
        <section class="book-list">
            <ul class="books-area">
                <li class="book-card" v-for="book in books" @click.native="selected(book)">
                    <book-preview :book="book"/>
                </li>
            </ul>
        </section>
    `,
	components: {
		bookPreview
	},
	created() {},
	data() {
		return {};
	},
	methods: {
		selected(book) {
			this.$emit('selected', book);
		}
	},
	computed: {},
	unmounted() {}
};

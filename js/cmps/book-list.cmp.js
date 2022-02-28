import bookPreview from './book-preview.cmp.js';

export default {
	props: ['books'],
	template: `
    	<section class="book-list">
            <ul class="books-area">
                <li class="book-card" v-for="book in books">
					<router-link :to="'/book/'+book.id">
                    	<book-preview :book="book"/>
					</router-link>
                </li>
            </ul>
        </section>
    `,
	components: {
		bookPreview,
	},
};

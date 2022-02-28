import bookDescription from './book-description.cmp.js';

export default {
	props: [ 'book' ],
	template: `
        <section class="book-details">
		<img :src="book.thumbnail">
			<div class="book-info">
				<h1>{{book.title}}</h1>
				<div>{{book.subtitle}}</div>
				<div><span>By (author)</span>{{book.authors}}</div>
				<div>{{publishedDate}}</div>
				<book-description :description="book.description" />
				<div>{{pageCount}}</div>
				<div>{{book.categories}}</div>
				<div>{{book.language}}</div>
				<div v-if="book.listPrice.isOnSale">SALE</div>
				<div><span :class="colorStyle">{{book.listPrice.amount}}</span></div>
			</div>
			<button @click="backToShop">Back to shop</button>
        </section>
    `,
	components: {
		bookDescription
	},
	created() {},
	data() {
		return {};
	},
	methods: {
		backToShop() {
			this.$emit('back');
		}
	},
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

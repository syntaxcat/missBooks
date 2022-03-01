import bookDescription from './book-description.cmp.js';
import { bookService } from '../services/book-service.js';
import reviewAdd from './review-add.cmp.js';
import { eventBus } from '../services/eventBus-service.js';

export default {
	template: `
		<div v-if="book">
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
			</section>
			<section>
			<router-link :to="'/book/'+book.prevBookId">Prev Book</router-link> | 
            <router-link :to="'/book/'+book.nextBookId">Next Book</router-link> 
			</section>
			<section>
				<review-add @addReview="addReview"/>
			</section>
		</div>
		<div v-for="review in reviews" class="review">
			{{ review.name }}
			<br />
			{{ review.rating }}
			<br />
			{{ review.date }}
			<br />
			{{ review.freeText }}
			<br />
			<button @click="deleteReview(review.id)">X</button>
		</div>
    `,
	components: {
		bookDescription,
		reviewAdd,
	},
	data() {
		return {
			book: null,
			reviews: [],
		};
	},
	created() {
		const id = this.bookId;
	},
	methods: {
		getBookReviews(id) {
			bookService.getBookReviews(id).then((reviews) => {
				this.reviews = reviews;
			});
		},
		deleteReview(reviewId) {
			bookService.removeReview(reviewId).then(() => {
				eventBus.emit('show-msg', {
					txt: 'Removed successfully',
					type: 'success',
				});
				this.getBookReviews(this.book.id);
			});
		},
		addReview(data) {
			bookService.addReview(this.book.id, data).then(() => {
				this.getBookReviews(this.book.id);
				eventBus.emit('show-msg', {
					txt: 'Review added successfully',
					type: 'success',
					link: '/about',
				});
			});
		},
		loadBook() {
			bookService.get(this.bookId).then((book) => {
				this.book = book;
			});
			this.getBookReviews(this.bookId);
		},
	},
	computed: {
		bookId() {
			return this.$route.params.bookId;
		},
		pageCount() {
			if (this.book.pageCount > 500) return 'Long reading';
			if (this.book.pageCount > 200) return ' Decent Reading';
			return 'Light Reading';
		},
		publishedDate() {
			if (new Date().getFullYear() - this.book.publishedDate > 10)
				return 'Veteran Book';
			if (new Date().getFullYear() - this.book.publishedDate < 1)
				return 'New!';
		},
		colorStyle() {
			return {
				red: this.book.listPrice.amount > 150,
				green: this.book.listPrice.amount < 20,
			};
		},
	},
	watch: {
		bookId: {
			handler() {
				if (!this.bookId) {
					return;
				}
				this.loadBook();
			},
			immediate: true,
		},
	},
};

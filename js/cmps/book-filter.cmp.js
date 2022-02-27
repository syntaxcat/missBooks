export default {
	props: [],
	template: `
        <section class="book-filter">
			<form @submit.prevent="onSubmit">
				<input type="text" v-model="filter.byName" placeholder="Name"/>
				<input type="number" v-model="filter.fromPrice"/>
				<input type="number" v-model="filter.toPrice"/>
				<button type="submit">Filter</button>
			</form>
        </section>
    `,
	components: {},
	created() {},
	data() {
		return {
			filter: {
				byName: '',
				fromPrice: 0,
				toPrice: 50
			}
		};
	},
	methods: {
		onSubmit() {
			this.$emit('onFilter', this.filter);
		}
	}
};

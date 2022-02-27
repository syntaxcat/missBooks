// • Allow the user to filter the books list by name and by price range
// • Emits: filtered with a filterBy object: {byName: 'xx', fromPrice:0, toPrice:Infinity}
// • Emits the current filter when Filter button is clicked

export default {
	props: [],
	template: `
        <section>
			<form @submit.prevent="onSubmit">
				<input type="text" v-model="filter.byName"/>
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
	},
	computed: {}
};

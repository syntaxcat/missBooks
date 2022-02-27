export default {
	props: [ 'description' ],
	template: `
        <section @click="toggle" class="book-description">
            <h2>{{formattedDescription}}</h2>
        </section>
    `,
	components: {},
	created() {},
	data() {
		return {
			showLess: true
		};
	},
	methods: {
		toggle() {
			this.showLess = !this.showLess;
		}
	},
	computed: {
		formattedDescription() {
			if (this.showLess) return this.description.slice(0, 100) + '...';
			return this.description;
		}
	}
};

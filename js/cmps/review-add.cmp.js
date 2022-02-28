export default {
	template: `
        <section class="review-add">
			<h1>review-add</h1>
            <form @submit="onSubmit">
                <input ref="nameInput" v-model="formData.name" type="text" >
                <input v-model="formData.date" type="date">
                <select v-model="formData.rating">
                    <option disabled value="">Please rate</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <textarea v-model="formData.freeText" cols="30" rows="5"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    `,
	data() {
		return {
			formData: {
				name: 'Books Reader',
				rating: '3',
				date: '2020-02-21',
				freeText: 'Hello book',
			},
		};
	},
	mounted() {
		this.$refs.nameInput.focus();
	},
	methods: {
		onSubmit(ev) {
			ev.preventDefault();
			this.$emit('addReview', this.formData);
		},
	},
};

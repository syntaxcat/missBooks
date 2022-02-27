import bookApp from './views/book-app.cmp.js';

const options = {
	template: `
        <section>
            <h1>missBook</h1>
            <bookApp/>
        </section>
    `,
	components: {
		bookApp
	}
};

const app = Vue.createApp(options);
app.mount('#app');

import bookApp from './views/book-app.cmp.js';
import appHeader from './cmps/app-header.cmp.js';

const options = {
	template: `
        <section class="main">
            <appHeader/>
            <bookApp/>
        </section>
    `,
	components: {
		bookApp,
		appHeader
	}
};

const app = Vue.createApp(options);
app.mount('#app');

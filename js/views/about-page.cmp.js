export default {
	props: [],
	template: `
        <section class="about-page">
			<h1>about-page</h1>
			<nav>
                <router-link to="/about/team">Team</router-link> |
                <router-link to="/about/services">Services</router-link>
            </nav>
            <router-view></router-view>
        </section>
    `,
	components: {},
	created() {},
	data() {
		return {};
	},
	methods: {},
};

const theData = { val: 'Bobo' };

export const aboutTeam = {
	template: `<section>
        <h2>Our Team is Amazing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla excepturi odit totam labore ipsam recusandae corrupti aperiam, cum, quis, quaerat facere repellat omnis dolorem saepe veniam ab soluta non doloribus!</p>
        <input type="text" v-model="val" />
    </section>`,
	data() {
		return { ...theData };
	},
};
export const aboutServices = {
	template: `<section>
        <h2>Our Services</h2>
        <ul>
            <li>Baba</li>
            <li>Mama</li>
            <li>Dada</li>
        </ul>
    </section>`,
};

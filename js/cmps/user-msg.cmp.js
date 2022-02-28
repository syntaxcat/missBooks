import { eventBus } from '../services/eventBus-service.js';

export default {
	template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
			<router-link :to="msg.link">Check it Out</router-link>
        </section>
    `,
	data() {
		return {
			msg: null,
		};
	},
	created() {
		this.unsubscribe = eventBus.on('show-msg', this.showMsg);
	},
	methods: {
		showMsg(msg) {
			this.msg = msg;
			setTimeout(() => {
				this.msg = null;
			}, 3000);
		},
	},
	unmounted() {
		this.unsubscribe();
	},
};

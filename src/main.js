import { createApp } from 'vue';
import App from 'src/App.vue';
import router from 'src/router';
import store from 'src/store';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
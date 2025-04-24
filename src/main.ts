import { createApp } from 'vue';
import '@app/style.css';
import { router } from '@app/router';
import App from '@app/App.vue';
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app');

import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {InitWasm} from '../wasm';

(async function () {
    await InitWasm().then(() => {
        createApp(App).mount('#app');
    });
})();


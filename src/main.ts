import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {InitWasm} from '../wasm';

await InitWasm()
createApp(App).mount('#app')

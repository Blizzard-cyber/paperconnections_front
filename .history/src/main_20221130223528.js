import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import { store } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

import topper from '@/components/topper.vue'
import bottom from '@/components/bottom.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(ArcoVue);
app.use(TDesign);
app.use(router)
app.mount('#app')

//组件全局祖册
app.component('my-topper', topper)
app.component('my-bottom', bottom)
import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import topper from '@/components/topper.vue'
import bottom from '@/components/bottom.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

//组件全局祖册
app.component('my-topper', topper)
app.component('my-bottom', bottom)
import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import topper from '../components/topper.vue'
import footer from '../components/footer.vue'

app.component('topper', topper)
app.component('footer', footer)
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
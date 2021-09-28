import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import store from './store'
app.use(store)

import router from './router'
app.use(router)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn.js'
app.use(ElementPlus, {
    size: store.state.settings.elementSize,
    locale: zhCn,
})

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 自定义指令
import directive from '@/util/directive'
directive(app)

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 全局样式
import '@/assets/styles/globals.scss'
// 重置样式
import '@/assets/styles/base.css'

app.mount('#app')

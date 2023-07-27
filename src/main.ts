import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//导入@element-plus/icons-vue 中所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//导入图标样式
import './assets/css/icon.css'
//导入pinia的数据
import { usePermissStore } from './store/permiss'

const app = createApp(App)
app.use(router)
app.use(createPinia())

//注册@element-plus/icons-vue 中所有图标
for(const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const permiss = usePermissStore();
// 注册全局指令：v-permiss
app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true; //将元素的hidden属性设置为true，隐藏元素
        }
    },
});

app.mount('#app')

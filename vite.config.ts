import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//Vue3插件，让setup语法糖可以定义name属性
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
//element-plus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
  ],
  optimizeDeps:{
    include:['schart.js']
  }
})

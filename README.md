
**技术栈：** </br></br>
Vue3 + TypeScript + Vite + Pinia + Vue-Router + Element-Plus + Axios + Scss </br></br>

**安装步骤：**
```
git clone 项目地址       // 把项目下载到本地
cd vue-manage-system    // 进入项目目录
npm install             // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn
npm run dev             // 运行项目

npm run build           // 执行构建命令，生成的dist文件夹放在服务器下即可访问
```

**项目亮点1：使用路由的懒加载**
```
//RouterRecordRaw是 Vue Router 4.x 中新增的类型，用于定义路由配置。它是一个 TypeScript 类
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard', //redirect路由的重定向，跳转至仪表板
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: { //路由元信息
                    title: '系统首页',
                    permiss: '1',
                },
                //使用路由的懒加载
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
         ···
```
**项目亮点2：Vue-schart实现可视化图表**
```
const options1 = {
	type: 'bar',
	title: {
		text: '最近一周各品类销售图'
	},
	bgColor: '#fbfbfb',
	labels: ['周一', '周二', '周三', '周四', '周五'],
	datasets: [
		{
			label: '家电',
			fillColor: 'rgba(241, 49, 74, 0.5)',
			data: [234, 278, 270, 190, 230]
		},
		{
			label: '百货',
			data: [164, 178, 190, 135, 160]
		},
		{
			label: '食品',
			data: [144, 198, 150, 235, 120]
		}
	]
};

```

## 登录页
![image](https://github.com/rinba/manage-system/assets/106224527/59bb6e6f-173d-46e4-b8ba-ae795225adf3)</br></br>

## Home页
![image](https://github.com/rinba/manage-system/assets/106224527/833fd3e2-879e-4d5f-b58d-f911ede351c7)<br/><br/>

![image](https://github.com/rinba/manage-system/assets/106224527/c7e1cef0-1be4-410f-bd29-68966d5be425)</br></br>

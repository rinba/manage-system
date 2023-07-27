//使用pinia管理左侧左侧导航栏的折叠与否
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
	state: () => {
		return {
			collapse: false
		};
	},
	getters: {},
	actions: {
		handleCollapse() {
			this.collapse = !this.collapse;
		}
	}
});

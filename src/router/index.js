import { createRouter, createWebHistory } from 'vue-router'
// 导入组件
import Home from '../views/Home.vue'
import CodeService from '../views/CodeService.vue'
import DomainComparison from '../views/DomainComparison.vue'
import IPADownload from '../views/IPADownload.vue'
import WindowsDownload from '../views/WindowsDownload.vue'
import WindowsActivation from '../views/WindowsActivation.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/code-service', name: 'CodeService', component: CodeService },
  { path: '/domain-comparison', name: 'DomainComparison', component: DomainComparison },
  { path: '/ipa-download', name: 'IPADownload', component: IPADownload },
  { path: '/windows-download', name: 'WindowsDownload', component: WindowsDownload },
  { path: '/windows-activation', name: 'WindowsActivation', component: WindowsActivation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

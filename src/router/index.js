import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Components
const Index = () => import('@/components/Index.vue');
const PagesRoot = () => import('@/components/Pages/Pages.Root.vue');
const SectionsRoot = () => import('@/components/Sections/Sections.Root.vue');
const DatasRoot = () => import('@/components/Datas/Datas.Root.vue');
const SchemasRoot = () => import('@/components/Schemas/Schemas.Root.vue');

// Routers
import PagesRouter from './pages.js';
import SectionsRouter from './sections.js';
import DatasRouter from './datas.js';
import SchemasRouter from './schemas.js';



export default new Router({
  routes: [
    {
      path: '/',
      name: "index",
      component: Index
    },
    {
      path: '/pages',
      component: PagesRoot,
      children: PagesRouter
    },
    {
      path: '/sections',
      component: SectionsRoot,
      children: SectionsRouter
    },
    {
      path: '/datas',
      component: DatasRoot,
      children: DatasRouter
    },
    {
      path: '/schemas',
      component: SchemasRoot,
      children: SchemasRouter
    }
  ]
})

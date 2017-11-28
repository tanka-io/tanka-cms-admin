import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Components
const Index = () => import('@/components/Index.vue');
const PagesRoot = () => import('@/components/Pages/Pages.Root.vue');
const SectionsRoot = () => import('@/components/Sections/Sections.Root.vue');
const ThemesRoot = () => import('@/components/Themes/Themes.Root.vue');
const DatasRoot = () => import('@/components/Datas/Datas.Root.vue');
const SchemasRoot = () => import('@/components/Schemas/Schemas.Root.vue');
const ChartsRoot = () => import('@/components/Charts/Charts.Root.vue');
const WizardRoot = () => import('@/components/Wizard/Wizard.Root.vue');

// Routers
import PagesRouter from './pages.js';
import SectionsRouter from './sections.js';
import ThemesRouter from './themes.js';
import DatasRouter from './datas.js';
import SchemasRouter from './schemas.js';
import ChartsRouter from './charts.js';
import WizardRouter from './wizard';



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
      path: '/themes',
      component: ThemesRoot,
      children: ThemesRouter
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
    },
    {
      path: '/charts',
      component: ChartsRoot,
      children: ChartsRouter
    },
    {
      path: '/wizard',
      component: WizardRoot,
      children: WizardRouter
    }
  ]
})

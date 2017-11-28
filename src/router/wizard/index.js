const ChartRoot = ()=> import('@/components/Wizard/Wizard.Root.vue');
import ChartWizardRouter from './excel.js'

export default [
    {
        path: 'excel',
        component: ChartRoot,
        children:ChartWizardRouter
    }
]
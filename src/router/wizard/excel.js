const upload = ()=>import('@/components/Wizard/Excel/Upload.vue')
const config = ()=>import('@/components/Wizard/Excel/ConfigChart.vue')
const schema = ()=>import('@/components/Wizard/Excel/Schema.vue')
export default [{
    path:'upload',
    component:upload
},{
    path:'config',
    component:config
},{
    path:'schema',
    component:schema
}]
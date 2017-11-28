const upload = ()=>import('@/components/Wizard/Excel/Upload.vue')
const fields = ()=>import('@/components/Wizard/Excel/Fields.vue')
const config = ()=>import('@/components/Wizard/Excel/ConfigChart.vue')
export default [{
    path:'upload',
    component:upload
},{
    path:'config',
    component:config
},{
    path:'fields',
    component:fields
}]
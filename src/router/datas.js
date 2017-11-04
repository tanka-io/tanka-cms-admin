const Index = () => import('@/components/Datas/Index.vue');
const New = () => import('@/components/Datas/New.vue');
const Edit = () => import('@/components/Datas/Edit.vue');

export default [
    {
        path: '',
        name: "datas",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idData/edit',
        component: Edit
    }
]
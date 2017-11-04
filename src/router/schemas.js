const Index = () => import('@/components/Schemas/Index.vue');
const New = () => import('@/components/Schemas/New.vue');
const Edit = () => import('@/components/Schemas/Edit.vue');

export default [
    {
        path: '',
        name: "schemas",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idSchema/edit',
        component: Edit
    }
]
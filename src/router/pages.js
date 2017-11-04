const Index = () => import('@/components/Pages/Index.vue');
const New = () => import('@/components/Pages/New.vue');
const Edit = () => import('@/components/Pages/Edit.vue');

export default [
    {
        path: '',
        name: "pages",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idPage/edit',
        component: Edit
    }
]
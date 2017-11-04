const Index = () => import('@/components/Sections/Index.vue');
const New = () => import('@/components/Sections/New.vue');
const Edit = () => import('@/components/Sections/Edit.vue');

export default [
    {
        path: '',
        name: "sections",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idSection/edit',
        component: Edit
    }
]
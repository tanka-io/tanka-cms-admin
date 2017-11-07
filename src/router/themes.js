const Index = () => import('@/components/Themes/Index.vue');
const New = () => import('@/components/Themes/New.vue');
const Edit = () => import('@/components/Themes/Edit.vue');

export default [
    {
        path: '',
        name: "themes",
        component: Index
    },
    {
        path: 'new',
        component: New
    },
    {
        path: ':idTheme/edit',
        component: Edit
    }
]
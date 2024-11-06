import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SettingView from '../views/SettingView.vue';
import FormulaView from '../views/FormulaView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/setting/:id',
        name: 'Setting',
        component: SettingView,
        props: true,
    },
    {
        path: '/formula/:id',
        name: 'Formula',
        component: FormulaView,
        props: true, // This line is crucial to pass the `id` as a prop
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

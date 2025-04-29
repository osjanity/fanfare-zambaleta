import {createRouter,createWebHashHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import GregPage from '../components/GregPage.vue';

const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/greg',
            name: 'greg',
            component: GregPage
        }
    ]
});

export default router;
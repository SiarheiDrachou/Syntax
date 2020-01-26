import Vue from 'vue';
import VueRouter from 'vue-router';

import Students from '@/views/Students.vue';
import StudentInfo from '@/views/StudentInfo.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/syntax-students', 
        component: Students,
        children: [
            { 
                path: ':id', 
                component: StudentInfo,
                name: "student"
            }
        ],
        name: "syntax-students"
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
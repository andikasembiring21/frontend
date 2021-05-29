import { createRouter , createWebHistory } from 'vue-router'; 

const routes = [
    {
        path : '/tugas2',
        name : 'transaksi.tugas2',
        component:()=> import('../views/transaksi/tugas2.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
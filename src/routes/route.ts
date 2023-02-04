const routes = [
    {
        path : '/',
        component : ()=>import('../pages/Home.vue')
    },
    {
        path : '/buy',
        component : ()=>import('../pages/Buy.vue')
    },
    {
        path : '/help',
        component : ()=>import('../pages/Help.vue')
    },
    {
        path : '/rent',
        component : ()=>import('../pages/Rent.vue')
    },
    {
        path : '/sell',
        component : ()=>import('../pages/Sell.vue')
    }
]

export default routes
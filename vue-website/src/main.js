import { createApp } from 'vue'
/* import { createRouter, createWebHistory } from 'vue-router' */

import App from './App.vue'
import NavBar from './components/NavBar.vue'
import Lipsum from './components/Lipsum.vue'
import Sidebar from './components/Sidebar.vue'

/*
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Lipsum },
        { path: '/giraffe', component: Giraffe },
    ]
});
*/

const app = createApp(App)

/*app.use(router);*/
app.component('nav-bar', NavBar)
app.component('sidebar', Sidebar)
app.component('lipsum', Lipsum)
app.mount('#app')

import { createRouter, createWebHashHistory } from 'vue-router';
import Bienvenidos from '../components/bienvenidos.vue';
import Habitaciones from '../components/habitaciones.vue';
import Servicios from '../components/servicios.vue';
import Reserva from '../components/reserva.vue';
import Actividades from '../components/actividades.vue';
import Contacto from '../components/contacto.vue';




const routes=[
    {path:'/',component:Bienvenidos},
    {path:'/habitaciones',component:Habitaciones},
    {path:'/servicios',component:Servicios},
    {path:'/contacto',component:Contacto},
  {path:'/reserva', component: Reserva},
  {path:'/actividades', component:Actividades},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

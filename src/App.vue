<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <img src="/img/logoImg.png" alt="">
        <div class="nav-container">
          <q-btn class="navegacion" :class="{ active: isActive('/') }" to="/" flat>
            <span class="custom-overline">Inicio</span>
          </q-btn>
          <q-btn class="navegacion" :class="{ active: isActive('/habitaciones') }" to="/habitaciones" flat>
            <span class="custom-overline">Habitaciones</span>
          </q-btn>
          <q-btn class="navegacion" :class="{ active: isActive('/servicios') }" to="/servicios" flat>
            <span class="custom-overline">Servicios</span>
          </q-btn>
          <q-btn class="navegacion" :class="{ active: isActive('/actividades') }" to="/actividades" flat>
            <span class="custom-overline">Actividades</span>
          </q-btn>
          <q-btn class="navegacion" :class="{ active: isActive('/contacto') }" to="/contacto" flat>
            <span class="custom-overline">Contacto</span>
          </q-btn>
          <q-btn class="navegacion" :class="{ active: isActive('/reserva') }" to="/reserva" flat>
            <span class="custom-overline">Reserva</span>
          </q-btn>
        </div>
        <q-btn class="btn-menu" flat @click="toggleDrawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerRight" side="right" :show-if-above="false" :width="200" :breakpoint="1000" elevated class="bg-primary text-white no-scroll">
      <q-btn flat dense round icon="close" @click="toggleDrawer" class="close-btn" />
      <q-scroll-area class="fit">
        <div class="contenido" v-show="drawerRight">
          <q-btn class="navegacion" :class="{  activo:  Active('/') }" to="/" flat>
            <span class="custom-overline">Inicio</span>
          </q-btn>
          <q-btn class="navegacion" :class="{  activo :  Active('/actividades') }" to="/actividades" flat>
            <span class="custom-overline">Actividades</span>
          </q-btn>
          <q-btn class="navegacion" :class="{  activo :  Active('/habitaciones') }" to="/habitaciones" flat>
            <span class="custom-overline">Habitaciones</span>
          </q-btn>
          <q-btn class="navegacion" :class="{  activo :  Active('/servicios') }" to="/servicios" flat>
            <span class="custom-overline">Servicios</span>
          </q-btn>
          <q-btn class="navegacion" :class="{  activo :  Active('/contacto') }" to="/contacto" flat>
            <span class="custom-overline">Contacto</span>
          </q-btn>
          <q-btn class="navegacion" :class="{  activo :  Active('/reserva') }" to="/reserva" flat>
            <span class="custom-overline">Reserva</span>
          </q-btn>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const drawerRight = ref(false); // Inicialmente cerrado
    const route = useRoute();

    const toggleDrawer = () => {
      drawerRight.value = !drawerRight.value; // Alternar entre abierto y cerrado
    };

    const isActive = (path) => {
      return route.path === path;
    };
    const Active = (path) => {
      return route.path === path;
    };

    return {
      drawerRight,
      toggleDrawer,
      isActive,
      Active
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arnold Regular";
}

.btn-menu {
  display: none; /* Se mostrará solo en pantallas pequeñas */
}

.bg-primary {
  background-color: rgb(22, 22, 22) !important;
  height: 80px;

  overflow: hidden;
}

.q-toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.q-toolbar img {
  position: absolute;
  width: 80px;
  left: 4%;
  top: 3%;
}

.nav-container {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 13%;
}

.navegacion {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0 1.2rem;
}

.custom-overline {
  position: relative;
}

.custom-overline::before {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: none;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.navegacion:hover .custom-overline::before {
  transform: scaleX(1) !important;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 -4px 18px rgb(255, 255, 255);
  font-weight: bold;
}

.navegacion.active .custom-overline::before {
  background-color: #fff;
  transform: scaleX(1);
  box-shadow: 0 -4px 20px #ffffff;
  font-weight: bold;
}

.navegacion .custom-overline::before {
  box-shadow: none;
}

.navegacion:not(.active) .custom-overline::before {
  transform: scaleX(0);
}

.q-btn:before,
.q-btn:active,
.q-btn:focus {
  background-color: none !important;
  border: none !important;
  box-shadow: none !important;
}

@media (max-width: 1000px) {
  .btn-menu {
    display: block;
    position: absolute;
    right: 3%;
    top: 45%;
  }

  .nav-container {
    display: none;
  }

  .bg-primary {
    background-color: rgb(22, 22, 22) !important;

  }
}

@media (max-width: 768px) {
  .navegacion {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
}

@media (max-width: 576px) {
  .navegacion {
    font-size: 0.9rem;
    padding: 0 0.3rem;
  }

  .q-toolbar {
    flex-direction: column;
  }
}

@media (max-width: 375px) {
  .navegacion {
    font-size: 0.8rem;
    padding: 0 0.2rem;
  }
}
</style>

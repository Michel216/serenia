<template>
  <div class="q-pa-md">
    <div class="text-h6"><h2 style="text-align: center;">Servicios</h2></div>
    <q-card class="servicios">



      <!-- Tarjeta para cada servicio -->
      <q-card v-for="(servicio, index) in servicios" :key="index" class="servicio">
        <q-img :src="servicio.imagen" alt="Imagen de {{ servicio.nombre }}" />
        <q-card-section>
          <div class="text-h6">{{ servicio.nombre }}</div>
          <div class="q-mt-sm">{{ servicio.descripcion }}</div>
        </q-card-section>
      </q-card>
    </q-card>
  </div>
</template>

<script setup>
const servicios = [
  {
    nombre: 'Conserjería Personalizada',
    descripcion: 'Asistencia completa para satisfacer las necesidades del huésped, desde reservas en restaurantes exclusivos hasta la organización de eventos especiales.',
    imagen: './img/servicios/conserjeria.jpeg' // Ejemplo de URL de imagen
  },
  {
    nombre: 'Spa de Clase Mundial',
    descripcion: 'Instalaciones de spa que ofrecen una amplia gama de tratamientos y terapias, incluyendo masajes, tratamientos faciales, y relajación total.',
    imagen: './img/servicios/servicioSpa.jpg'
  },
  {
    nombre: 'Restaurante Gastronómico',
    descripcion: 'Experiencias culinarias excepcionales con chefs de renombre mundial, menús innovadores y una selección de vinos exclusivos.',
    imagen: './img/servicios/restaurante.jpeg'
  },
  {
    nombre: 'Servicio de Habitaciones 24/7',
    descripcion: 'Disponibilidad de servicio de habitaciones las 24 horas, ofreciendo comidas gourmet y bebidas de alta calidad directamente en la habitación del huésped.',
    imagen: './img/servicios/servicios.webp'
  },

  {
    nombre: 'Gimnasio Equipado',
    descripcion: 'Instalaciones deportivas de última generación con equipos de fitness avanzados y entrenadores personales disponibles.',
    imagen: './img/servicios/gym.jpeg'
  },
  {
    nombre: 'Servicio de Mayordomo',
    descripcion: 'Asistencia personalizada con servicios como desempaquetado de equipaje, preparación de baños, y atención exclusiva durante la estancia.',
    imagen: './img/servicios/mayordomo.jpg'
  },
 
  {
    nombre: 'Servicio de Limpieza Dos Veces al Día',
    descripcion: 'Mantenimiento impecable de las habitaciones con servicio de limpieza matutino y vespertino, asegurando la máxima comodidad y orden.',
    imagen: './img/servicios/limpieza.jpeg'
  },

  {
    nombre: 'Servicio de Transporte VIP',
    descripcion: 'Transporte de lujo disponible para traslados al aeropuerto, tours privados y acceso exclusivo a lugares de interés.',
    imagen: './img/servicios/R.jpeg'
  }
];
</script>

<style scoped>
.servicios {
  max-width: 1000px; /* Ancho máximo para el contenedor de tarjetas */
  margin: auto; /* Centrado horizontal */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.servicio {
  width: 300px; /* Ancho fijo para cada tarjeta */
  margin-bottom: 20px; /* Espacio entre tarjetas */
}

.servicio .q-card-section {
  text-align: center;
}
</style>

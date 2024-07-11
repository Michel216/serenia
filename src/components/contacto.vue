<template>
  <div>
    <div class="contacto">
      <div class="contacto-imagen">
        <img src="/img/contactanos.jpg" alt="Imagen de contacto">
        <h3 class="contacta">Contáctanos</h3>
      </div>
      <div class="infoContacto">
        <section>
          <h4>Información de Contacto</h4>
          <p><strong>Dirección Física:</strong><br> Hotel Serenia<br> 27 St James's Pl, St. James's, London SW1A 1NR, Reino Unido</p>
          <p><strong>Números de Teléfono:</strong><br> Recepción: +34 123 456 789<br> Reservas: +34 987 654 321<br> Atención al Cliente: +34 456 789 123</p>
          <p><strong>Dirección de Correo Electrónico:</strong><br> Información General: info@hotelelegancia.com<br> Reservas: reservas@hotelelegancia.com<br> Eventos: eventos@hotelelegancia.com</p>
          <p><strong>Horarios de Atención:</strong><br> Recepción: 24 horas<br> Reservas: Lunes a Viernes, 9:00 AM - 8:00 PM<br> Atención al Cliente: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        </section>
      </div>
    </div>
  
    <div class="formularioYmapa">
      <section class="formulario">
        <q-card>
          <q-card-section>
            <q-card-title>Contacto</q-card-title>
            <q-form @submit="submitForm" ref="form">
              <q-input v-model="formData.nombre" label="Nombre" outlined dense required :rules="[v => !!v || 'Este campo es requerido']" />
              <q-input v-model="formData.email" label="Correo Electrónico" outlined dense type="email" required :rules="[v => !!v || 'Este campo es requerido', v => isValidEmail(v) || 'Correo electrónico no válido']" />
              <q-input v-model="formData.telefono" label="Teléfono" outlined dense :rules="[v => !v || /^\d{7,14}$/.test(v) || 'Teléfono inválido']" />
              <q-input v-model="formData.mensaje" label="Mensaje" outlined dense type="textarea" rows="4" required :rules="[v => !!v || 'Este campo es requerido']" />
              <q-checkbox v-model="formData.aceptaTerminos" label="Acepto los términos y condiciones" required :rules="[v => v === true || 'Debe aceptar los términos y condiciones para continuar']" :error-message="errorAceptaTerminos" />
              <br>
              <q-btn type="submit" label="Enviar" color="primary" class="btnFormulario" :loading="isLoading" />
            </q-form>
          </q-card-section>
        </q-card>
      </section>

      <div class="map-container">
        <!-- <l-map :zoom="16" :center="hotelLocation" style="height: 500px; width: 100%;">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"></l-tile-layer>
          <l-marker :lat-lng="hotelLocation">
            <l-popup>Hotel Serenia</l-popup>
          </l-marker>
        </l-map> -->
        <div id="map" style="height: 430px;"></div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa tu icono personalizado aquí
import markerIcon from '/img/marker-icon.png';
onMounted(() => {
  const map = L.map('map').setView([50.783432, -1.065528], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Define el icono personalizado
  const customIcon = L.icon({
    iconUrl: markerIcon, // Ruta al archivo de tu icono personalizado
    iconSize: [30, 35], // Tamaño del icono [ancho, alto]
    iconAnchor: [12, 41], // Punto de anclaje del icono respecto al marcador (centro inferior)
    popupAnchor: [1, -34] // Desplazamiento del popup en relación al icono
  });

  // Agrega el marcador con el icono personalizado
  L.marker([50.783432, -1.065528], { icon: customIcon }).addTo(map)
    .bindPopup('Hotel Serenia')
    .openPopup();
});
const formRef = ref(null);
const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
  aceptaTerminos: false,
});

const isLoading = ref(false);
const errorAceptaTerminos = ref('');

// Función para validar correo electrónico
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para enviar el formulario
const submitForm = () => {
  errorAceptaTerminos.value = '';

  if (!formRef.value.validate()) {
    return;
  }

  if (!formData.value.aceptaTerminos) {
    errorAceptaTerminos.value = 'Debe aceptar los términos y condiciones para continuar';
    return;
  }

  isLoading.value = true;

  // Simular envío del formulario (aquí puedes implementar tu lógica real)
  setTimeout(() => {
    alert('Formulario enviado correctamente');

    // Limpiar campos
    formData.value.nombre = '';
    formData.value.email = '';
    formData.value.telefono = '';
    formData.value.mensaje = '';
    formData.value.aceptaTerminos = false;

    isLoading.value = false;
  }, 1500);
};
</script>

<style scoped>
.contacto {
  display: grid;
  grid-template-columns: 60% 40%;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.contacto-imagen {
  position: relative;
}

.contacto-imagen img {
  width: 100%;
  height: 100%;
  filter: grayscale(80%);
}

.contacta {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-left: 10px solid rgb(241, 174, 5);
  color: white;
  font-size: 6em;
  padding-left: 4px;
  text-shadow: 0 0 15px black;
}

.infoContacto {
  background-color: rgba(241, 174, 5, 0.894);
  padding: 5%;
}

.formularioYmapa {
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 6px;
  margin: 3%;
}

.formulario {
  width: 35%;
  margin-right: 20px;
  text-align: center;
}

.map-container {
  flex-grow: 1;
  height: 500px;
  width: 50%;
}
.btnFormulario {
  display: flex;
  justify-content: center;
  height: auto;
  margin: auto;
  align-content: center;
}
@media screen and (max-width: 780px) {
  /* .contacto {
  display: grid;
grid-template-rows: 1fr;

} */
.contacto-imagen {
  position: absolute;
  width: 100%;

}
.contacta {
  position: absolute;
  top: 30%;
  font-size: 450%;

}
.infoContacto {
margin-top: 100%;
  background-color: rgba(241, 174, 5, 0.894);
  padding: 5%;
 margin-left: 100%;
 margin-right: -70%;
}
.formulario {
  /* position: absolute; */
  width: 35%;
  margin-top: -550px;
  width: 55%;
  margin-right: 20px;
  text-align: center;
}
.map-container {
  position: absolute;

margin-left: -10px;
  width: 100%;

}
}
@media screen and (max-width: 630px) {


.contacta {
  position: absolute;
  top: 30%;
  font-size: 450%;

}
.infoContacto {
  
margin-top: 1240px !important;
  background-color: rgba(241, 174, 5, 0.894);
  padding: 5%;
margin: 0%;
 width: 167%;
 height: 160%;
 margin-bottom: -10px;
}
.formularioYmapa {
position: absolute;
top: 53%;
width: 100%;
}
.formulario {
  position: relative;
width: 70%;
margin-left: 12%;
}
.map-container {
  position: absolute;
margin-top: -20%;
width: 100% !important;

}
.infoContacto section {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  gap: 5px;
  justify-content: center;
}

.infoContacto section h4 {
  display: flex;
  width: 100%;
  justify-content: center;
}

.infoContacto section p {
  width: 45%;
}
}

</style>

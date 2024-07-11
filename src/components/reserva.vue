<template>
  <div class="container">
    <div class="fondo"></div>
    <q-card class="formulario">
      <q-card-section>
        <div class="text-h6">Reserva tu Habitación</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="submitReservation" ref="reservationFormRef">
          <q-input
            v-model="reservationData.checkInDate"
            label="Fecha de Entrada"
            type="date"
            outlined
            dense
            required
            :rules="[v => !!v || 'Este campo es requerido', dateValidator]"
          />
          <q-input
            v-model="reservationData.checkOutDate"
            label="Fecha de Salida"
            type="date"
            outlined
            dense
            required
            :rules="[v => !!v || 'Este campo es requerido']"
          />
          <q-select
            v-model="reservationData.roomType"
            label="Tipo de Habitación"
            outlined
            dense
            :options="roomOptions"
            option-label="label"
            option-value="value"
            required
            :rules="[v => !!v || 'Este campo es requerido']"
          />
          <q-input
            v-model="reservationData.fullName"
            label="Nombre Completo"
            outlined
            dense
            required
            :rules="[v => !!v || 'Este campo es requerido']"
          />
          <q-input
            v-model="reservationData.email"
            label="Correo Electrónico"
            type="email"
            outlined
            dense
            required
            :rules="[v => !!v || 'Este campo es requerido', v => isValidEmail(v) || 'Correo electrónico no válido']"
          />
          <q-input
            v-model="reservationData.phoneNumber"
            label="Número de Teléfono"
            type="tel"
            outlined
            dense
            required
            :rules="[v => !!v || 'Este campo es requerido', v => /^\d{7,14}$/.test(v) || 'Teléfono inválido']"
          />
          <q-checkbox
            v-model="reservationData.acceptTerms"
            label="Acepto los términos y condiciones"
            required
            :rules="[v => v === true || 'Debe aceptar los términos y condiciones para continuar']"
            :error="!reservationData.acceptTerms && errorAcceptTerms"
          />
          <br>
          <q-btn
            type="submit"
            label="Reservar"
            color="primary"
            class="btnReserva"
            :loading="isLoading"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const reservationFormRef = ref(null);
const router = useRouter();

const reservationData = ref({
  checkInDate: '',
  checkOutDate: '',
  roomType: null,
  fullName: '',
  email: '',
  phoneNumber: '',
  acceptTerms: false,
});

const isLoading = ref(false);
const errorAcceptTerms = ref('');

const roomOptions = [
  { label: 'Habitación Estándar - $100 por noche', value: 'standard', price: 100 },
  { label: 'Habitación Deluxe - $150 por noche', value: 'deluxe', price: 150 },
  { label: 'Suite - $200 por noche', value: 'suite', price: 200 },
];

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const dateValidator = (v) => {
  if (!v) return 'Este campo es requerido';
  const currentDate = new Date();
  const selectedDate = new Date(v);
  if (selectedDate <= currentDate) {
    return 'La fecha de entrada debe ser posterior a hoy';
  }
  return true;
};

const submitReservation = () => {
  errorAcceptTerms.value = '';
  if (!reservationFormRef.value) return;
  reservationFormRef.value.validate().then((isValid) => {
    if (!isValid) return;
    if (!reservationData.value.acceptTerms) {
      errorAcceptTerms.value = 'Debe aceptar los términos y condiciones para continuar';
      return;
    }
    isLoading.value = true;
    setTimeout(() => {
      reservationData.value.checkInDate = '';
      reservationData.value.checkOutDate = '';
      reservationData.value.roomType = null;
      reservationData.value.fullName = '';
      reservationData.value.email = '';
      reservationData.value.phoneNumber = '';
      reservationData.value.acceptTerms = false;
      reservationFormRef.value.resetValidation();
      isLoading.value = false;
      alert('Reserva enviada correctamente');
      router.push('/');
    }, 1500);
  });
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}

.fondo {
  background-image: url('/img/serenia.jpeg');
  filter: brightness(30%);
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  background-position: center center;
}

.formulario {
  background-color: rgb(250, 235, 215);
 width: 60% !important;
  /* padding: 20px; */
  border-radius: 20px;
  z-index: 1;
}

.btnReserva {
  display: flex;
  justify-content: center;
  height: auto;
  margin: auto;
  align-content: center;
}



@media screen and (max-width: 470px) {

  .formulario {
    width: 80% !important;
  }
}
</style>

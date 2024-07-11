<template>
  <div>
    <div class="tituloPagina"><h2 style="text-align: center;">Actividades</h2></div>

    <div class="q-pa-md d-flex justify-center">
      <!-- Actividad 1: Escalada en Indoor Climbing Center -->
      <q-card class="my-card" flat bordered style="">
        <img src="/img/actividades/escalada.jpg" style="width: 100%; height: 50%; object-fit: cover; margin: auto auto; align-content: center;">
  
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="orange" name="directions_run" />
            </q-item-section>
  
            <q-item-section>
              <q-item-label>Centro de Escalada Indoor</q-item-label>
              <q-item-label caption>Desafíate con la escalada indoor.</q-item-label>
              <q-item-label caption>Dificultad: Moderada</q-item-label>
              <q-item-label caption>
                Requisitos:
                <ul>
                  <li q-icon name="check" color="green" > Edad mínima de 5 años</li>
                  <li q-icon name="check" color="green" > Zapatos de escalada</li>
                  <li q-icon name="check" color="green" > Arneses y cuerdas proporcionados</li>
                </ul>
              </q-item-label>
              <q-item-label caption>Precio: Desde £30 por sesión.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
  
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary" @click="mostrarModal = true">Reservar</q-btn>
        </q-card-actions>
      </q-card>
  
      <!-- Actividad 2: Rafting en el Río Támesis -->
      <q-card class="my-card" flat bordered style="">
        <img src="/img/actividades/rafting.jpeg" style="width: 100%; height: 50%; object-fit: cover; margin: auto auto; align-content: center;">
  
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="blue" name="directions_boat" />
            </q-item-section>
  
            <q-item-section>
              <q-item-label>Descenso en Rápidos de Montaña</q-item-label>
              <q-item-label caption>Embárcate en una aventura acuática llena de adrenalina.</q-item-label>
              <q-item-label caption>Dificultad: Alta, requiere habilidades avanzadas de navegación.</q-item-label>
              <q-item-label caption>
                Requisitos:
                <ul>
                  <li q-icon name="check" color="green" > Edad mínima de 16 años</li>
                  <li q-icon name="check" color="green" > Habilidades básicas de natación</li>
                  <li q-icon name="check" color="green" > Equipo de rafting proporcionado</li>
                </ul>
              </q-item-label>
              <q-item-label caption>Precio: Desde £50 por persona.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
  
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary" @click="mostrarModal = true">Reservar</q-btn>
        </q-card-actions>
      </q-card>
  
      <!-- Actividad 3: Paracaidismo Indoor en iFLY -->
      <q-card class="my-card" flat bordered style="">
        <img src="/img/actividades/paracaidismo.webp" style="width: 100%; height: 50%; object-fit: cover; margin: auto auto; align-content: center;">
  
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="purple" name="flight" />
            </q-item-section>
  
            <q-item-section>
              <q-item-label>Salto en Paracaídas sobre Paisajes Salvajes</q-item-label>
              <q-item-label caption>Experimenta la libertad absoluta desde el cielo.</q-item-label>
              <q-item-label caption>Dificultad: Extrema, solo para los más audaces.</q-item-label>
              <q-item-label caption>
                Requisitos:
                <ul>
                  <li q-icon name="check" color="green" > Edad mínima de 10 años</li>
                  <li q-icon name="check" color="green" > Estado físico adecuado</li>
                  <li q-icon name="check" color="green" > Instrucción y equipo proporcionados</li>
                </ul>
              </q-item-label>
              <q-item-label caption>Precio: Desde £60 por sesión.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
  
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary" @click="mostrarModal = true">Reservar</q-btn>
        </q-card-actions>
      </q-card>
  
      <!-- Actividad 4: Surf en la Playa de Southend-on-Sea -->
  
      <!-- Actividad 5: Bungee Jumping en el Puente de Londres -->
      <q-card class="my-card" flat bordered style="">
        <img src="/img/actividades/bungee.jpg" style="width: 100%; height: 50%; object-fit: cover; margin: auto auto; align-content: center;">
  
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="sports_motorsports" />
            </q-item-section>
  
            <q-item-section>
              <q-item-label>Bungee Jumping desde Acantilados</q-item-label>
              <q-item-label caption>Vive la intensidad de saltar desde alturas impresionantes.</q-item-label>
              <q-item-label caption>Dificultad: Extrema, para los amantes de la adrenalina pura.</q-item-label>
              <q-item-label caption>
                Requisitos:
                <ul>
                  <li q-icon name="check" color="green" > Edad mínima de 18 años</li>
                  <li q-icon name="check" color="green" > Buena salud física</li>
                  <li q-icon name="check" color="green" > Equipamiento de seguridad proporcionado</li>
                </ul>
              </q-item-label>
              <q-item-label caption>Precio: Desde £100 por salto.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
  
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary" @click="mostrarModal = true">Reservar</q-btn>
        </q-card-actions>
      </q-card>
  
      <!-- Actividad 6: Esquí Acuático en el Regent's Park -->
      <q-card class="my-card" flat bordered >
        <img src="/img/actividades/esqui.jpg" style="width: 100%; height: 50%; object-fit: cover; margin: auto auto; align-content: center;">
  
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="green" name="directions_boat_filled" />
            </q-item-section>
  
            <q-item-section>
              <q-item-label>Esquí Acuático en el Regent's Park</q-item-label>
              <q-item-label caption>Disfruta de la velocidad y la destreza en aguas tranquilas y hermosas.</q-item-label>
              <q-item-label caption>Dificultad: Moderada, apto para principiantes y aficionados.</q-item-label>
              <q-item-label caption>
                Requisitos:
                <ul>
                  <li q-icon name="check" color="green" > Equipo de esquí acuático</li>
                  <li q-icon name="check" color="green" > Habilidades básicas de natación</li>
                  <li q-icon name="check" color="green" > Instrucción disponible bajo solicitud</li>
                </ul>
              </q-item-label>
              <q-item-label caption>Precio: Desde £40 por sesión.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
  
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary" @click="mostrarModal = true">Reservar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  
    <!-- Modal para el formulario de reserva -->
    <q-dialog v-model="mostrarModal" persistent>
      <q-card style="max-width: 500px;"> <!-- Ajuste del ancho máximo del modal -->
        <q-card-section class="text-h6">Reserva tu aventura</q-card-section> <!-- Título más grande y centrado -->
  
        <!-- Contenido del formulario -->
        <q-card-section>
          <q-form @submit="enviarFormulario">
            <q-input outlined v-model="nombre" label="Nombre completo" required></q-input>
            <q-input outlined v-model="correo" label="Correo electrónico" type="email" required></q-input>
            <q-input outlined v-model="telefono" label="Teléfono de contacto" type="tel" required></q-input>
            <q-input outlined v-model="mensaje" label="Mensaje adicional" textarea></q-input>
  
            <!-- Botones de acciones del formulario -->
            <q-card-actions align="right">
              <q-btn label="Cancelar" dense @click="mostrarModal = false"></q-btn> <!-- Botón más pequeño -->
              <q-btn type="submit" label="Enviar"  dense></q-btn> <!-- Botón más pequeño -->
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const mostrarModal = ref(false); // Estado del modal (inicialmente oculto)
  const nombre = ref('');
  const correo = ref('');
  const telefono = ref('');
  const mensaje = ref('');
  
  // Función para enviar el formulario
  const enviarFormulario = () => {
    alert('Reserva enviada correctamente');
    nombre.value = '';
    correo.value = '';
    telefono.value = '';
    mensaje.value = '';
    mostrarModal.value = false;
  };
  </script>
  
  <style scoped>
.q-pa-md{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 10px;
margin-top: 10px;
  margin: auto auto;
/* margin-top: 6%; */
}
  .q-card-section.text-h6 {
    font-size: 1.5rem;
    text-align: center;
  }
  .my-card{
    margin: auto auto;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px;
  }
  
 
  .q-dialog {
    width: 80%; 
  }
  
  /* Espacio entre los campos del formulario */
  .q-card-section:not(.text-h6) {
    margin-bottom: 16px;
  }
  
  /* Botones más pequeños */
  .q-btn {
    min-width: auto; /* Permitir que los botones tengan el tamaño mínimo */
    padding: 8px 16px; /* Ajustar el padding de los botones */
  }

  @media screen and (max-width: 1200px) {
    .q-pa-md{
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 50px;

}
  }
  @media screen and (max-width: 870px) {
    .q-pa-md{
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 10px;

}
  }
  @media screen and (max-width: 800px) {
    .q-pa-md{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
margin: 100px;
gap: 20px;
}
  }

  @media screen and (max-width: 630px) {
    .q-pa-md{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
margin: 30px;
gap: 20px;
}
  }
  @media screen and (max-width: 480px) {
    .q-pa-md{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
margin: 10px;
margin-bottom: 20%;
gap: 8%;
}
.my-card{
    margin: auto auto;
    width: 100%;
    height: 130%;
    box-shadow: 0 0 20px;
  }
  }
  </style>
  
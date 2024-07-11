<template>

  <div class="banner"></div>
  <div class="bienvenida">
    <div class="mensaje">
      <h2>Bienvenidos a Serenia</h2>
      <h6>Descubre una experiencia de hospitalidad única donde el lujo se combina con la comodidad. En nuestro hotel,
        nos esforzamos por ofrecer no solo un lugar donde hospedarse, sino un refugio donde encontrar tranquilidad y
        bienestar. Cada detalle está diseñado para asegurar que tu estancia sea memorable.</h6>
      <h6> Explora nuestras instalaciones, disfruta de la calidez de nuestro servicio y déjanos ser parte de tu
        próxima aventura. Estamos aquí para hacer de cada momento una experiencia especial.</h6>
    </div>
    <img id="logo" src='img/logo.png' alt="">
  </div>

  <div class="titulo-contenedor">
    <h2 id="habitacionesTitulo">Alojamiento</h2>
    <h6 id="mensajeHabitaciones">Bienvenido a nuestro Refugio de Confort y Elegancia</h6>
  </div>
  <hr>
  <div class="q-pa-md">
    <q-carousel v-model="slide" infinite transition-prev="jump-left" transition-next="jump-right" swipeable animated
      control-color="black" navigation padding arrows height="500px" class="bg-grey-0 shadow-0 rounded-borders">
      <template v-slot:navigation-icon="{ active, btnProps }">
        <q-btn v-if="active" size="ls" :icon="btnProps.icon" flat round dense />
        <q-btn v-else size="sm" :icon="btnProps.icon" color="grey" flat round dense />
      </template>
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" style="transform: scaleX(-1)"
            src="/img/imgHabitaciones/doble.png" />
          <div class="tarjeta">
            <div class="text">
              <h5 class="text-bold">Habitación Doble Individual</h5>
              <p>Una habitación doble individual con una cama espaciosa y suave, decorada con detalles elegantes y un
                ambiente
                sereno que invita al descanso y la
                relajación. Perfecta para disfrutar de momentos de tranquilidad y confort.</p>
                <q-btn class="detalles" to="/habitaciones">Más Detalles</q-btn>
              </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="/img/imgHabitaciones/estandar.png" />
          <div class="tarjeta">
            <div class="text">
              <h5 class="text-bold">Habitación Estándar</h5>
              <p>Una habitación estándar que ofrece comodidad y funcionalidad, con una cama acogedora, decoración
                sencilla y
                moderna, y todos los servicios esenciales.
                Perfecta para una estancia agradable y sin complicaciones.</p>
                <q-btn class="detalles" to="/habitaciones">Más Detalles</q-btn>
              </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" src="/img/imgHabitaciones/familiar.png" />
          <div class="tarjeta">
            <div class="text">
              <h5 class="text-bold">Habitación Familiar</h5>
              <p>Una habitación familiar espaciosa y acogedora, diseñada para el confort de todos. Con camas cómodas,
                decoración cálida y áreas amplias para relajarse,
                es el lugar perfecto para crear recuerdos inolvidables juntos.</p>
                <q-btn class="detalles" to="/habitaciones">Más Detalles</q-btn>
              </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-6 full-height" style="transform: scaleX(-1)"
            src="/img/imgHabitaciones/deluxSuite.png" />
          <div class="tarjeta">
            <div class="text">
              <h5 class="text-bold">Habitación Deluxe Suite</h5>
              <p>Una Deluxe Suite que redefine el lujo y la comodidad. Con un amplio espacio, una cama king-size, sala
                de
                estar elegante y vistas impresionantes, esta
                suite ofrece una experiencia inigualable de descanso y sofisticación. Perfecta para quienes buscan lo
                mejor en
                estilo y confort.</p>
              <q-btn class="detalles" to="/habitaciones">Más Detalles</q-btn>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="serviciosDestacados">
    <h2 id="habitacionesTitulo">Servicios Destacados</h2>
    <h6 id="mensajeHabitaciones"> Descubre lo mejor que ofrecemos para ti</h6>
    <hr>
  </div>
  <div class="servicios">
    <div class="serviciosDerecha" id="piscina">
      <img src="/img/servicios/piscina.jpg" alt="">
      <div class="textDerecha">
        <h3>Piscinas de Lujo</h3>
        <h6>Nuestras piscinas destacan por su diseño sofisticado y moderno. Con líneas limpias y elegantes, el entorno
          de
          la piscina está adornado con muebles de lujo y una iluminación ambiental que crea el ambiente perfecto tanto
          de
          día como de noche.</h6>
        <q-btn class="btn-contacto" id="btn-contacto-derecha" to="/contacto">
          <div>Contacto</div>
        </q-btn>
      </div>

    </div>
    <div class="serviciosIzquierda" id="spa"> <img src="/img/servicios/spa.jpeg" alt="">
      <div class="textIzquierda">
        <h3>Spas de Clase Mundial</h3>
        <h6>El spa de nuestro hotel es un oasis de paz y rejuvenecimiento. Ofrecemos una amplia gama de tratamientos,
          desde masajes terapéuticos hasta tratamientos de belleza y bienestar. </h6>
        <q-btn class="btn-contacto" id="btn-contacto-izquierda" to="/contacto">
          <div>Contacto</div>
        </q-btn>
      </div>
    </div>
    <div class="serviciosDerecha" id="restaurante">
      <img src="/img/servicios/restaurante.jpg" alt="">
      <div class="textDerecha">
        <h3>Restaurantes Gourmet</h3>
        <h6>Nuestros restaurantes de alta cocina ofrecen una experiencia gastronómica inigualable, con menús
          elaborados
          por chefs galardonados que utilizan ingredientes frescos y de origen local.</h6>
        <q-btn class="btn-contacto" id="btn-contacto-derecha" to="/contacto">
          <div>Contacto</div>
        </q-btn>
      </div>
    </div>
    <div class="serviciosIzquierda" id="salon">
      <img src="/img/servicios/eventos.jpg" alt="">
      <div class="textIzquierda">
        <h3>Salones para Eventos y Reuniones</h3>
        <h6>Ofrecemos salones elegantes y versátiles que son perfectos para bodas, conferencias y eventos especiales.
          Todos nuestros espacios están equipados con la última tecnología audiovisual.</h6>
        <q-btn class="btn-contacto" id="btn-contacto-izquierda" to="/contacto">
          <div>Contacto</div>
        </q-btn>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const slide = ref(1);
const autoplay = ref(true);
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-width: 100%;
}

.banner img {
  min-width: 100%;

  margin-top: 0%;
  position: absolute;
  top: 0;
}

.banner {
  background-image: url('/img/serenia.jpeg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(60%);
  background-position: center center;
  height: 100vh;
  text-align: center;
  position: relative;
  top: 0;
}

.bienvenida {
  position: relative;
  top: 140%;
  left: 50%;
  transform: translate(-50%, -10%);
  background-color: rgb(255, 255, 255);
  width: 40rem;
  /* max-width: 90%; */
  /* Ajusta el ancho máximo para pantallas más pequeñas */
  padding: 1.1rem;
  text-align: center;
  box-shadow: 0px 0px 20px;
  box-sizing: border-box;
  /* Incluye el padding en el ancho total */
}

.mensaje {
  margin: 2%;
  padding: 8%;
  border: 2px solid rgb(183, 149, 11);
  box-sizing: border-box;
  /* Incluye el padding en el ancho total */
}

#logo {
  position: absolute;
  width: 40%;
  left: -100px;
  top: 85%;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .bienvenida {
    width: 30rem;
    top: 120%;
    /* Ajusta la posición para pantallas más pequeñas */
  }

  #logo {
    width: 45%;
    /* Ajusta el tamaño del logo */
    left: -53px;
    /* Ajusta la posición del logo */
    top: 86%;
    /* Ajusta la posición del logo */
  }
}

@media screen and (max-width: 576px) {
  .bienvenida {
    width: 90%;
    top: 110%;
    /* transform: translate(-50%, -10%); */
   
  }

  .mensaje {
    padding: 3%;
    /* Ajusta el padding para pantallas más pequeñas */
  }

  /* .mensaje  h6{
    font-size: 30px;
  } */

  #logo {
    width: 43%;
    /* Ajusta el tamaño del logo */
    left: 27%;
    /* Ajusta la posición del logo */
    top: 91%;
    /* Ajusta la posición del logo */
  }
}
@media screen and (max-width: 430px) {

  .bienvenida {
     width: 100%;
    transform: translate(-46%, -10%);
  }
  .q-carousel {
    width: 120%;
  height: 90vh !important;
  padding-bottom:40%;
  margin-left: -10px
}
.q-img__image--loaded{
height: 10px;
}


  .tarjeta {

margin-left: 3%;
    margin-top: 90%;
width: 70%;
height: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    border-radius: 8px; 
  }
  .text{
  height: 10%;
   margin: 0;
   padding: 3%;
  }
}
@media screen and (max-width: 375px) {
  .bienvenida {
    width: 380px;
    top: 100%;
    transform: translate(-40%, -10%);
  }

  .mensaje {
    padding: 3%;
    /* Ajusta el padding para pantallas más pequeñas */
  }

  #logo {
    width: 50%;
    /* Ajusta el tamaño del logo */
    left: 80px;
    /* Ajusta la posición del logo */
    top: 91%;
    /* Ajusta la posición del logo */
  }
}

.titulo-contenedor {
  text-align: center;
  margin: 0;
  padding: 0;
  margin-top: 100px;
}

#habitacionesTitulo,
#mensajeHabitaciones {
  margin: 0;
  padding: 0;
}


#mensajeHabitaciones {
  margin-top: 20px;
}

hr {
  width: 60%;
  height: .5px;
  background-color: #000000;
  border: #000000;
}


.q-pa-md {
  /* width: 95% !important; */
  align-content: center;
  margin: auto auto;

}

.q-carousel {
  height: 100vh !important;
  padding-bottom: 50px;
}

/* Transición para mostrar (entrar) */
.q-transition--jump-left-enter-active {
  transition: transform 0.5s ease-in-out;
}

.q-transition--jump-left-enter {
  transform: translateX(-100%);
}

/* Transición para ocultar (salir) */
.q-transition--jump-right-leave-active {
  transition: transform 0.5s ease-in-out;
}

.q-transition--jump-right-leave-to {
  transform: translateX(100%);
}

.full-height {
  position: relative;
  z-index: 1;
  width: 70%;
  height: 100%;
}

.custom-size {
  transform: scaleX(-1);
  height: 450px;
  margin-left: 62%;
  margin-top: 16%;
  width: 28%;
  height: 70%;
  position: absolute;
  z-index: 0;
}

.tarjeta {
  position: absolute;
  z-index: 1;
  margin-top: 10%;
  width: auto;
  margin-left: 55%;
  margin-right: 60px;
  height: auto;
  background-color: white;
  padding: 2.5% 2%;
  text-align: center;
  align-content: center;
  align-items: center;
  border-radius: 3px;


  box-shadow: 0 0 15px;
}

.text {
  border: 1px solid rgb(183, 149, 11);
  margin: 8px;
  padding: 10%;
}

.text h5 {
  margin: 0%;
  padding: 0%;
  margin-bottom: 10px;
}

.detalles {
  font-size: 120%;
  text-align: center;
  margin: auto auto;
  width: 60%;
  border-bottom: 2px solid#000000;
}

.serviciosDestacados {
  margin: auto auto;
  text-align: center;
  margin-bottom: 12%;
}

.btn-contacto {
  background: rgb(183, 149, 11);
  color: #ffffff;
  font-weight: bold;
  padding: 0 1.5rem !important;
  height: 40px !important;
  border-radius: 20px;
  font-size: 1rem;
  margin: 20px 0;
}

.btn-contacto:hover {
  box-shadow: 0px 0px 15px rgb(183, 149, 11), inset 0px 0px 20px rgb(183, 149, 11);
  color: #ffffff;
}

.btn-contacto:active {
  box-shadow: 0px 0px 15px rgb(183, 149, 11), inset 0px 0px 20px rgb(183, 149, 11 / 20%);
  background: rgb(183, 149, 11);
}

.btn--outline {
  border-color: rgb(183, 149, 11);
  color: rgb(183, 149, 11);
  background: transparent;
}

.servicios {
  padding-bottom: 5%;
}

.serviciosDerecha h3,
.serviciosDerecha h6,
.serviciosIzquierda h3,
.serviciosIzquierda h6 {
  margin: 0%;
  padding: 0%;
}

.serviciosDerecha {
  border: 2px solid rgb(183, 149, 11);
  padding: 2%;
  width: 76%;
  margin: auto auto;
  position: relative;
  margin-top: 10%;
  margin-bottom: 15%;

}

.serviciosDerecha h3 {
  margin: 0%;
  padding: 0%;
  margin-bottom: 15px;
}

.serviciosDerecha img {
  position: absolute;
  width: 30%;
  height: 140%;

  bottom: -18%;
  left: 50px;
}

.textDerecha {
  position: relative;
  margin-left: 45%;
  border: 0px;
  text-align: left;
  width: 50%;
}

.serviciosIzquierda {
  border: 2px solid rgb(183, 149, 11);
  padding: 2%;
  width: 76%;
  margin: auto auto;
  position: relative;
  margin-top: 8%;
  margin-bottom: 15%;
}

.serviciosIzquierda h3 {
  margin: 0%;
  padding: 0%;
  margin-bottom: 15px;
}

.serviciosIzquierda img {
  position: absolute;
  width: 35%;
  height: 130%;
  bottom: -15%;
  right: 50px;
}

.textIzquierda {
  position: relative;
  margin-right: 40%;
  border: 0px;
  text-align: left;
  width: 50%;
}

@media screen and (max-width: 1150px) {
  .tarjeta {
    margin-top: 15%;
    margin-left: 50%;
  }

  .tarjeta .text h5 {
    font-size: 1.2rem;
  }

  .tarjeta .text p {
    font-size: 1rem;
  }

  .tarjeta .text .detalles {
    font-size: 0.9rem;
  }
}
@media screen and (max-width:1000px) {
  .serviciosIzquierda img {
  position: absolute;
  width: 35%;
  height: 110%;
  bottom: -5%;
  right: 50px;
}
.serviciosDerecha img {
  position: absolute;
  width: 30%;
  height: 110%;

  bottom: -5%;
  left: 50px;
}
}

@media screen and (max-width: 850px) {
  .q-carousel {
  height: 130vh !important;
  padding-bottom: 30%;
}
  .row-fit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .col-6 {
    width: 100%;
  }

  .tarjeta {
 
    width: 70%;
    margin-top: 540px;
margin-left: 7%;
  height: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    border-radius: 8px; 
  }

  .tarjeta .text h5 {
    font-size: 1.2rem;
  }

  .tarjeta .text p {
    font-size: 1rem;
  }

  .tarjeta .text .detalles {
    font-size: 0.9rem;
  }

  q-carousel-slide {
    padding: 10px; /* Ajustar según necesites */
  }
}
@media screen and (max-width:800px) {
  .serviciosIzquierda img, .serviciosDerecha img {
  position: absolute;
  width: 35%;
  height: 90%;
  bottom: 5%;
  right: 50px;

}
.serviciosIzquierda, .serviciosDerecha{
width: 90%;
margin-bottom: 10%;

}
.serviciosIzquierda img{
margin-left: 3%;
}
.serviciosDerecha img{
margin-left: -4%;
}
}
@media screen and (max-width:560px) {
  
  .serviciosIzquierda img, .serviciosDerecha img {
  position: absolute;
  width: 35%;
  height: 40%;
  top: 15%;
  right: 50px;

}

.serviciosIzquierda, .serviciosDerecha{
width: 90%;
margin-bottom: 10%;

}
.serviciosIzquierda img{
margin-left: 3%;
}
.serviciosDerecha img{
margin-left: -6%;
}
#btn-contacto-derecha {
position: absolute;
top: 60%;
left: -80%;
}
#btn-contacto-izquierda{
position: absolute;
top: 60%;
right: -70% ;
}
}
@media screen and (max-width: 505px) {
  .serviciosIzquierda, .serviciosDerecha{
width: 97%;
margin-bottom: 10%;
/* margin-left: 0%; */
}
}
@media screen and (max-width: 640px) {
  .q-carousel {
    width: 110%;
  height: 90vh !important;
  padding-bottom:30%;
  margin-left: -30px
}
.q-img__image--loaded{
height: 10px;
}


  .tarjeta {

margin-left: 6%;
    margin-top: 60%;
width: 70%;
height: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    border-radius: 8px; 
  }
  .text{
  height: 10%;
   margin: 0;
   padding: 3%;
  }
  .text p{
    width: 100%;


  }
}
@media screen and (max-width: 500px) {
  .q-carousel {
    width: 113%;
  height: 80vh !important;
  padding-bottom:37%;
  margin-left: -25px
}

  .tarjeta {

margin-left: 4%;
    margin-top: 65%;
width: 68%;
height: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    border-radius: 8px; 
  }
}

@media screen and (max-width:440px) {
  .banner {
    background-position: center center;
  width: 106%;
  }
  .q-carousel {
    width: 120%;
  height: 80vh !important;
  padding-bottom:60%;
  margin-left: -35px
}

  .tarjeta {

margin-left: 0%;
    margin-top: 85%;
width: 73.4%;
height: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
    border-radius: 8px; 
  }

}
@media screen and (max-width:415px) {

  .mensaje  h2{
      font-size: 45px;
    }

}

</style>

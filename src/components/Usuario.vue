<template>
       
       <div class="card">

              <div class="card-header">

                     <h3>{{ usuario.id }}</h3>

              </div>

              <div class="card-body">

                     <p>{{ usuario.nombre }}</p>
                     <br>
                     <p>{{ usuario.correo }}</p>

              </div>

       </div>

</template>

<script>

       export default {
              
              name: 'usuario',

              props: {

                     usuario: Object

              },

       }

</script>

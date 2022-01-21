<template>

       <div class="container">
              
              <img alt="Vue logo" src="./assets/users.svg">

              <Formulario @getNewDatos="addNewUsuario" />

              <Tabla :usuarios="usuarios"/>

              <br>

              <Tarjetas :usuarios="usuarios"/>
              
       </div>

</template>

<script>
       import Tabla from './components/Tabla';
       import Tarjetas from './components/Tarjetas';
       import Formulario from './components/Formulario';

       export default {

              name: 'App',

              components: {

                     Tabla,
                     Tarjetas,
                     Formulario,

              },

              data(){
                     return{

                            usuarios:[

                            ]

                     }
              },

              created(){
                     this.usuarios = [

                                   {id:'1',nombre:'plamen',correo:'plamen@gmail.com'},
                                   {id:'2',nombre:'plamen',correo:'plamen@gmail.com'},
                                   {id:'3',nombre:'plamen',correo:'plamen@gmail.com'},
                                   {id:'4',nombre:'plamen',correo:'plamen@gmail.com'},

                     ]
              },

              methods:{

                     addNewUsuario(persona){

                            this.usuarios.push( persona );

                     },

              },

       }
</script>

<style>
       #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-align: center;
              color: #2c3e50;
              margin-top: 60px;
       }
       img{
              width:30%;
              margin-bottom: 10px;
       }
</style>

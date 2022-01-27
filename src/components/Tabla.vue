<template>
       
       <div>

              <div class="container">
                     
                     <br>

                     <h1>Tabla de usuarios</h1>

                     <div v-if="usuarios.length > 0">
                     
                            <table>

                                   <thead>

                                          <th>Nombre</th>
                                          <th>Apellidos</th>
                                          <th>Correo</th>
                                          <th>Opciones</th>

                                   </thead>

                                   <tbody>

                                          <tr v-for="(usuario,i) in usuarios" :key="i">
                                                 
                                                 <td v-if="editando === usuario"><form @submit.prevent="guardarEdicion()"><input type="text" class="form-control" v-model="usuario.nombre" /></form></td><td v-else>{{ usuario.nombre }}</td>
                                                 <td v-if="editando === usuario"><form @submit.prevent="guardarEdicion()"><input type="text" class="form-control" v-model="usuario.apellidos" /></form></td><td v-else>{{ usuario.apellidos }}</td>
                                                 <td v-if="editando === usuario"><form @submit.prevent="guardarEdicion()"><input type="text" class="form-control" v-model="usuario.correo" /></form></td><td v-else>{{ usuario.correo }}</td>
                                                 <td>
                                                        
                                                        <div class="btn-group">


                                                               <a v-if="editando === usuario" @click="guardarEdicion()" class="btn btn-sm btn-outline-success">Guardar</a>
                                                               <a v-else @click="editarUsuario(usuario)" class="btn btn-sm btn-outline-primary">Editar</a>

                                                               <a v-if="editando === usuario" @click="cancelarEdicion(usuario)" class="btn btn-sm btn-outline-secondary">Cerrar</a>
                                                               <a v-else @click="borrarUsuario(usuario)" class="btn btn-sm btn-outline-danger">Borrar</a>

                                                        </div>

                                                 </td>

                                          </tr>

                                   </tbody>

                            </table>

                     </div>
                     <div v-else>

                            <h3>No hay usuarios para mostrar</h3>

                     </div>

              </div>

       </div>

</template>

<script>
import { useToast } from "vue-toastification";

export default {

       name: 'tabla',

       props: {

              usuarios: Array,

       },

       data(){
              return{

                     toast: useToast(),
                     editando: false,
                     cache_persona: null,

              }
       },

       methods: {

              borrarUsuario(persona){ 
                     
                     this.$emit("getBorrar", persona); 
                                   
                     this.toast.info("Contacto "+ persona.nombre +" borrado correctamente.", {
                            timeout: 1200
                     });       

              },

              editarUsuario(persona){

                     this.cache_persona = Object.assign({}, persona);
                     this.editando = persona;

              },

              guardarEdicion( ){

                     this.$emit( "actualizarDatos", this.usuarios );
                     this.resetEdicion();
                     this.toast.success("Contacto editado correctamente.", {
                            timeout: 1000
                     });

              },

              cancelarEdicion(persona){

                     Object.assign(persona, this.cache_persona);
                     this.resetEdicion();

              },

              resetEdicion(){
                     this.cache_persona = null;
                     this.editando = false;
              }

       }


}
</script>

<style scoped>

       h3{
              font-weight:100;
              font-size:1em;
              color: #9e9e9e;
       }
       th,td{
              padding: 15px;
              background-color: rgba(65, 184, 131,0.2);
              color: #5e5e5e;
       }
       th{
              background-color:rgba(65, 184, 131);
              color: #fff;
       }
       tr:hover{
              background-color: rgba(65,184,131,0.3);
              cursor: pointer;
       }
       input{
              width:25%;
              display:block;
              margin:0 auto;
              margin-bottom:10px;
       }

       td input{
              width:100%;
              text-align: center;
              background-color: rgba(65, 184, 131,0.5);
              border:none;
              padding: 0;
       }

       td input:focus{
              background-color: rgba(255,255,255,0.2);
              border:none;  
              box-shadow: none;
       }

       table{
              margin:0 auto;
              width:100%;
       }

       .container{
              margin-bottom: 3em;
       }

</style>
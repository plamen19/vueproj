<template>
       
       <div>

              <div class="container">
                     
                     <br>

                     <h1>Tabla de usuarios</h1>

                     <div v-if="usuarios.length > 0">
                     
                            <table>

                                   <thead>

                                          <th>ID</th>
                                          <th>Nombre</th>
                                          <th>Correo</th>
                                          <th>Opciones</th>

                                   </thead>

                                   <tbody>

                                          <tr v-for="(usuario,i) in usuarios" :key="i">
                                                 
                                                 <td v-if="editando === usuario.id"><input type="text" class="form-control" v-model="usuario.id" /></td><td v-else>{{ usuario.id }}</td>
                                                 <td v-if="editando === usuario.id"><input type="text" class="form-control" v-model="usuario.nombre" /></td><td v-else>{{ usuario.nombre }}</td>
                                                 <td v-if="editando === usuario.id"><input type="text" class="form-control" v-model="usuario.correo" /></td><td v-else>{{ usuario.correo }}</td>
                                                 <td>
                                                        
                                                        <div class="btn-group">


                                                               <a v-if="editando === usuario.id" @click="guardarEdicion()" class="btn btn-sm btn-outline-success">Guardar</a>
                                                               <a v-else @click="editarUsuario(usuario)" class="btn btn-sm btn-outline-primary">Editar</a>

                                                               <a v-if="editando === usuario.id" @click="cancelarEdicion(usuario)" class="btn btn-sm btn-outline-secondary">Cerrar</a>
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

export default {

       name: 'tabla',

       props: {

              usuarios: Array,

       },

       data(){
              return{

                     editando: false,
                     cache_persona: null,

              }
       },

       methods: {

              borrarUsuario(persona){

                     this.$emit("getBorrar", persona);

              },

              editarUsuario(persona){

                     this.cache_persona = Object.assign({}, persona);
                     this.editando = persona.id;

              },

              guardarEdicion( ){

                     this.$emit( "actualizarDatos", this.usuarios );
                     this.resetEdicion();

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
       }

       table{
              margin:0 auto;
              width:100%;
       }

       .container{
              margin-bottom: 3em;
       }

</style>
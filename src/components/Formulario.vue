<template>
       
       <div>

              <form @submit.prevent="enviarDatos">

                     <div class="row">

                            <h3>Agrega un usuario</h3>
                            <p>Agrega un nuevo usuario al sistema.</p>

                            <div class="col-md-2">

                                   <div class="form-group">

                                          <input @focus="resetEstado" :class="{ 'is-invalid': procesando && idInvalido }" v-model="persona.id" type="number" placeholder="ID" class="form-control">

                                   </div>

                            </div>

                            <div class="col-md-4">

                                   <div class="form-group">

                                          <input @focus="resetEstado" :class="{ 'is-invalid': procesando && nombreInvalido }" v-model="persona.nombre" type="text" placeholder="Nombre" class="form-control">

                                   </div>

                            </div>

                            <div class="col-md-6">

                                   <div class="form-group">

                                          <input @focus="resetEstado" :class="{ 'is-invalid': procesando && correoInvalido }" v-model="persona.correo" type="email" placeholder="Correo@correo.com" class="form-control">

                                   </div>

                            </div>


                     </div>

                     <br>

                     <button type="submit" class="btn btn-primary">Agregar persona</button>

                     <br><br>

                     <div class="row">
                            <div class="col-md-12">
                                   <div v-if="error && procesando" class="alert alert-danger" role="alert">
                                          Debes rellenar todos los campos!
                                   </div>
                                   <div v-if="correcto" class="alert alert-success" role="alert">
                                          La persona ha sido agregada correctamente!
                                   </div>
                            </div>
                     </div>

              </form>

       </div>

</template>

<script>
export default {
       
       name: 'formulario',

       data(){

              return{

                     procesando: false,
                     correcto: false,
                     error: false,

                     persona: {

                            id: '',
                            nombre: '',
                            correo: '',

                     }

              }

       },

       computed: {
              idInvalido() {

                     return this.persona.id.length < 1;
                     
              },
              nombreInvalido() {

                     return this.persona.nombre.length < 1;

              },
              correoInvalido() {

                     return this.persona.correo.length < 1;

              },
       },

       methods: {

              enviarDatos(){

                     this.procesando = true;
                     this.resetEstado();
                     
                     if (this.idInvalido || this.nombreInvalido || this.correoInvalido) {

                            this.error = true;
                            return;

                     }

                     this.$emit( "getNewDatos", { id: this.persona.id, nombre: this.persona.nombre, correo: this.persona.correo } );

                     this.error = false;
                     this.correcto = true;
                     this.procesando = false;

                     // Restablecemos el valor de la variables
                     this.persona= {
                            nombre: '',
                            apellido: '',
                            email: '',
                     }

              },

                resetEstado() {
                     this.correcto = false;
                     this.error = false;
              }

       }


}
</script>
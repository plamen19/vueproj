<template>
       
       <div>

              <form @submit.prevent="enviarDatos">

                     <div class="row">

                            <h3>Agrega un usuario</h3>
                            <p>Agrega un nuevo usuario al sistema.</p>

                            <div class="col-md-4">

                                   <div class="form-group">

                                          <input @focus="resetEstado" :class="{ 'is-invalid': procesando && nombreInvalido, 'is-valid': correcto }" v-model="persona.nombre" type="text" placeholder="Nombre" class="form-control">

                                   </div>

                            </div>

                            <div class="col-md-4">

                                   <div class="form-group">

                                          <input @focus="resetEstado" :class="{ 'is-invalid': procesando && apellidoInvalido, 'is-valid': correcto }" v-model="persona.apellido" type="text" placeholder="Apellido" class="form-control">

                                   </div>

                            </div>

                            <div class="col-md-4">

                                   <div class="form-group">

                                          <input @focus="resetEstado" :class="{ 'is-invalid': procesando && correoInvalido, 'is-valid': correcto }" v-model="persona.correo" type="email" placeholder="Correo@correo.com" class="form-control">

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
import { useToast } from "vue-toastification";

export default {
       
       name: 'formulario',

       data(){

              return{

                     toast: useToast(),
                     procesando: false,
                     correcto: false,
                     error: false,

                     persona: {

                            nombre: '',
                            apellido: '',
                            correo: '',

                     }

              }

       },

       computed: {
              nombreInvalido() {

                     return this.persona.nombre.length < 1;
                     
              },
              apellidoInvalido() {

                     return this.persona.apellido.length < 1;

              },
              correoInvalido() {

                     return this.persona.correo.length < 1;

              },
       },

       methods: {

              enviarDatos(){

                     this.procesando = true;
                     this.resetEstado();
                     
                     if (this.nombreInvalido || this.apellidoInvalido || this.correoInvalido) {

                            this.error = true;
                            return;

                     }

                     this.$emit( "getNewDatos", { nombre: this.persona.nombre, apellido: this.persona.apellido, correo: this.persona.correo } );

                     this.error = false;
                     this.correcto = true;
                     this.procesando = false;

                     this.toast.info("Contacto nuevo agregado correctamente a la lista.", {
                            timeout: 1000
                     });       

                     // Restablecemos el valor de la variables
                     this.persona= {
                            nombre: '',
                            apellido: '',
                            correo: '',
                     }

              },

                resetEstado() {
                     this.correcto = false;
                     this.error = false;
              }

       }


}
</script>
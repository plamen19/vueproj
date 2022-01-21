<template>
       
       <div>

              <form @submit.prevent="enviarDatos">

                     <div class="row">

                            <h3>Agrega un usuario</h3>
                            <p>Agrega un nuevo usuario al sistema.</p>

                            <div class="col-md-2">

                                   <div class="form-group">

                                          <input v-model="persona.id" type="number" placeholder="ID" class="form-control">

                                   </div>

                            </div>

                            <div class="col-md-4">

                                   <div class="form-group">

                                          <input v-model="persona.nombre" type="text" placeholder="Nombre" class="form-control">

                                   </div>

                            </div>

                            <div class="col-md-6">

                                   <div class="form-group">

                                          <input v-model="persona.correo" type="email" placeholder="Correo@correo.com" class="form-control">

                                   </div>

                            </div>


                     </div>

                     <br>

                     <button type="submit" class="btn btn-primary">Agregar persona</button>

              </form>

       </div>

</template>

<script>
export default {
       
       name: 'formulario',

       data(){

              return{

                     persona: {

                            id: '',
                            nombre: '',
                            correo: '',

                     }

              }

       },

       methods: {

              enviarDatos(){

                     this.$emit( "getNewDatos", this.persona );

              }

       }


}
</script>
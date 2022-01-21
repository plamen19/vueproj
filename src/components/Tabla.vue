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

                                   </thead>

                                   <tbody>

                                          <tr v-for="(usuario,i) in usuarios" :key="i">
                                                 
                                                 <td>{{ usuario.id }}</td>
                                                 <td>{{ usuario.nombre }}</td>
                                                 <td>{{ usuario.correo }}</td>

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


}
</script>

<style scoped>

       h3{
              font-weight:100;
              font-size:1em;
              color: #9e9e9e;
       }
       th,td{
              padding: 10px;
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

       table{
              margin:0 auto;
              width:70%;
       }

</style>
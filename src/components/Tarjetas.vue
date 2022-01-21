<template>
       
       <div class="card-group">
              
              <Usuario 
                     v-for="(persona,index) in usuarios" 
                     :key="index" 
                     :usuario="persona" />

       </div>

</template>

<script>
import Usuario from './Usuario';

export default {
       
       name: 'tarjetas',
       
       components:{
              Usuario,
       },

       props: {
              usuarios: Array,
       }

}
</script>

<style scoped>

       div{
              margin-bottom:3em;
       }

</style>
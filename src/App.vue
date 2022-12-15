<template>
  <div>
    <navbar />
   


    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
export default{
    components:{
      Navbar
    }
}
</script>


<style scoped>
</style>

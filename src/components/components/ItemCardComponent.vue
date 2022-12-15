<template>
  <div>
    <h5 class="text-gray-600 text-sm">{{ title }}</h5>
    <p  :class="getClassStatus">{{ text }}</p>
   
  </div>
</template>

<script>


export default {
  props: ["title", "text"],
  components: {
  },
  data() {
    return {
    };
  },

  computed: {
    getClassStatus() {
      if (this.text == "Falha") {
        return "flex text-red-500 text-sm font-semibold ";
      } else if (this.text == "Enviado") {
        return "flex text-green-500 text-sm font-semibold ";
      } else if (this.text == "Enviando...") {
        return "flex text-yellow-500 text-sm font-semibold ";
      }
      return "flex text-gray-400 text-sm";
    },
    
  },
};
</script>

<style lang="scss" scoped>
</style>
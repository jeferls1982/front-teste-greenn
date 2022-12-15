<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <li v-for="i in pagination.last_page" :key="i.id">
        <a
          @click="page(pagination.path, i)"
          href="#"
          class="
            px-3
            py-2
            leading-tight
            text-gray-500
            bg-white
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
          >{{ i }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  props: ["pagination"],
  methods: {
    page(path, page) {
      axios
        .get(path+"?page="+page)
        .then((res) => {
          console.log(res);
          this.$store.commit("setMails", res.data.data);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
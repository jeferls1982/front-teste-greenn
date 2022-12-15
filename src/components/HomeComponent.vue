<template>
  <div>
    <div v-if="loading" class="container">
      <load-cards-component class="mt-40"></load-cards-component>
    </div>
    <div class="container w-10/12">
      <div class="flex flex-wrap justify-start  text-white">
        <div
          v-for="item in getEmails"
          :key="item.id"
          class=" w-64 h-60 rounded-md m-2 border-gray-500"
        >
          <card-component :item="item"></card-component>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <pagination-component v-if="pagination" :pagination="pagination"/>
    </div>
    <modal-add-disparo-vue></modal-add-disparo-vue>
  </div>
</template>

<script>
import axios from "axios";
import ModalAddDisparoVue from "./components/ModalAddDisparo.vue";
import LoadCardsComponent from "../components/components/LoadCardsComponent.vue";
import CardComponent from "../components/components/CardComponent.vue";
import PaginationComponent from './components/PaginationComponent.vue';

export default {
  components: {
    ModalAddDisparoVue,
    LoadCardsComponent,
    CardComponent,
    PaginationComponent,
  },
  data() {
    return {
      loading: true,
      pagination : null,
    };
  },

  methods: {
    loadMails() {
      this.loading = true;
      axios.get("http://127.0.0.1:9000/api/emails").then((res) => {
        console.log(res.data);
        this.pagination = res.data
        this.$store.commit("setMails", res.data.data);
        this.loading = false;
      }).catch((error)=>{
        console.log(error);
      });
    },
  },
  computed: {
    getEmails() {
      return this.$store.state.emails;
    },
  },
  created() {
    this.loadMails();
  },
  mounted() {
        setInterval(() => {
            axios.get('http://127.0.0.1:9000/api/verifica-falhas').then(()=>{
            });
        }, 10000);
    },
};
</script>

<style lang="scss" scoped>
</style>
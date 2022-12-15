<template>
  <div>
    <!-- Main modal -->
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabindex="-1"
      aria-hidden="true"
      class="
        fixed
        top-0
        left-0
        right-0
        z-50
        hidden
        w-full
        p-4
        overflow-x-hidden overflow-y-auto
        md:inset-0
        h-modal
        md:h-full
      "
    >
      <div class="relative w-full h-full max-w-4xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="
              flex
              items-start
              justify-between
              p-3
              border-b
              rounded-t
              dark:border-gray-600
            "
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Crie seu novo disparo
            </h3>
            <button
              type="button"
              class="
                text-gray-400
                bg-transparent
                hover:bg-gray-200 hover:text-gray-900
                rounded-lg
                text-sm
                p-1.5
                ml-auto
                inline-flex
                items-center
                dark:hover:bg-gray-600 dark:hover:text-white
              "
              data-modal-toggle="staticModal"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-4">
            <form>
              <div class="mb-4 flex w-full">
                <div class="w-full">
                  <label
                    for="email"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                    >Título</label
                  >
                  <input
                    type="text"
                    id="titulo"
                    v-model="titulo"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    placeholder="Titulo do seu novo disparo"
                    required
                  />
                </div>
                <div class="w-full ml-2">
                  <label
                    for="password"
                    class="
                      block
                      mb-2
                      text-sm
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                    >E-mail do remetente</label
                  >
                  <input
                    type="email"
                    id="remetente"
                    v-model="remetente"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                    "
                    placeholder="remetente@email.com"
                    required
                  />
                </div>
              </div>
              <div class="mb-4">
                <label
                  for="message"
                  class="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-white
                  "
                  >E-mails dos destinatários</label
                >
                <textarea
                  v-model="destinatarios"
                  id="message"
                  rows="2"
                  class="
                    block
                    p-2.5
                    w-full
                    mb-2
                    text-sm text-gray-900
                    bg-gray-50
                    rounded-lg
                    border border-gray-300
                    focus:ring-blue-500 focus:border-blue-500
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  placeholder="Insira os e-mails separados por vírgula.&#10;Ex: exemplo@org.com,exemplo2@teste.com"
                ></textarea>

                <vue-editor v-model="conteudo" class="mb-2" />
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="
              flex
              items-center
              justify-end
              p-4
              space-x-2
              border-t border-gray-200
              rounded-b
              dark:border-gray-600
            "
          >
            <button
              data-modal-toggle="staticModal"
              type="button"
              class="
                text-gray-500
                bg-white
                hover:bg-gray-100
                focus:ring-4 focus:outline-none focus:ring-blue-300
                rounded-lg
                border border-gray-200
                text-sm
                font-medium
                px-5
                py-2.5
                hover:text-gray-900
                focus:z-10
                dark:bg-gray-700
                dark:text-gray-300
                dark:border-gray-500
                dark:hover:text-white
                dark:hover:bg-gray-600
                dark:focus:ring-gray-600
              "
            >
              Cancelar
            </button>
            <button
              @click="store"
              data-modal-toggle="staticModal"
              type="button"
              class="
                cursor-pointer
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
            >
              Criar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      base_url: "http://localhost:9000/api/emails",
      titulo: null,
      remetente: null,
      destinatarios: null,
      conteudo: null,
    };
  },
  methods: {
    store() {
      if (
        !this.titulo ||
        !this.remetente ||
        !this.destinatarios ||
        !this.conteudo
      ) {
        alert("Todos os campos são obrigatórios");
        this.clearForm();
      } else {
        var data = {
          titulo: this.titulo,
          remetente: this.remetente,
          status: "Enviando...",
          destinatarios: this.destinatarios,
          conteudo: this.conteudo,
        };

        var arrayEmails = this.$store.state.emails;
        arrayEmails.unshift(data);

        this.$store.commit("setMails", arrayEmails);

        axios.post(this.base_url, data).then((res) => {
          setTimeout(() => {
            axios.get("http://127.0.0.1:9000/api/verifica-falhas").then(() => {
              axios.get(this.base_url).then((res) => {
                this.$store.commit("setMails", res.data.data);
              });
            });
          }, 2000);
          this.clearForm();
        });
      }
    },
    clearForm() {
      this.titulo = null;
      this.remetente = null;
      this.destinatarios = null;
      this.conteudo = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
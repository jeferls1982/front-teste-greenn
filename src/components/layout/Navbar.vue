<template>
  <div>
    <nav
      class="
        p-1
        border-gray-200
        rounded
        bg-gray-50
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="#" class="flex items-center">
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >Disparos</span
          >
        </a>
        <span>
          <div class="inline-flex rounded-md shadow-sm">
            <a
              @click="filter('Todos')"
              href="#"
              aria-current="page"
              class="
                py-2
                px-4
                text-sm
                font-medium
                text-gray-700
                bg-white
                rounded-l-lg
                border border-gray-200
                hover:bg-gray-100
                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
                dark:bg-gray-700
                dark:border-gray-600
                dark:text-white
                dark:hover:text-white
                dark:hover:bg-gray-600
                dark:focus:ring-blue-500
                dark:focus:text-white
              "
            >
            Todos
              
            </a>
            <a
              @click="filter('Falha')"
              href="#"
              class="
                py-2
                px-4
                text-sm
                font-medium
                text-gray-900
                bg-red-200
                border-t border-b border-gray-200
                hover:bg-gray-100 hover:text-blue-700
                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
                dark:bg-gray-700
                dark:border-gray-600
                dark:text-white
                dark:hover:text-white
                dark:hover:bg-gray-600
                dark:focus:ring-blue-500
                dark:focus:text-white
              "
            >
              Falha
            </a>
            <a
              @click="filter('Enviado')"
              href="#"
              class="
                py-2
                px-4
                text-sm
                font-medium
                text-gray-900
                bg-green-200
                rounded-r-md
                border border-gray-200
                hover:bg-gray-100 hover:text-blue-700
                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
                dark:bg-gray-700
                dark:border-gray-600
                dark:text-white
                dark:hover:text-white
                dark:hover:bg-gray-600
                dark:focus:ring-blue-500
                dark:focus:text-white
              "
            >
            Enviados
            </a>
          </div>
        </span>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            class="
              flex
              p-2
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-transparent
              dark:bg-gray-800
              md:dark:bg-transparent
              dark:border-gray-700
            "
          >
            <li class="flex align-middle">
              <button
                class="
                  block
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
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
                type="button"
                data-modal-toggle="staticModal"
              >
                Adicioar Novo Disparo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    filter(param) {
      if (param == "Todos") {
        axios
          .get("http://127.0.0.1:8000/api/emails")
          .then((res) => {
            this.$store.commit("setMails", res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .get("http://127.0.0.1:8000/api/emails?filter=" + param)
          .then((res) => {
            this.$store.commit("setMails", res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
